"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_1 = tslib_1.__importDefault(require("./type"));
exports.type = type_1.default;
var isTrueNaN = type_1.default.isTrueNaN;
const VOID0 = void 0;
/**
 * Used for special comparison including NaN.
 * @param a
 * @param b
 * @param strict
 * @returns {boolean|any}
 */
function areEqual(a, b, strict = true) {
    return a === b || (!strict && a == b) || (isTrueNaN(a) && isTrueNaN(b));
}
exports.areEqual = areEqual;
const COMPARE_TO = 'compareTo';
function compare(a, b, strict = true) {
    if (areEqual(a, b, strict))
        return 0 /* Equal */;
    if (a && type_1.default.hasMember(a, COMPARE_TO))
        return a.compareTo(b);
    // If a has compareTo, use it.
    else if (b && type_1.default.hasMember(b, COMPARE_TO))
        return -b.compareTo(a); // a doesn't have compareTo? check if b does and invert.
    // Allow for special inequality..
    if (a > b || (strict && ((a === 0 && b == 0) || (a === null && b === VOID0))))
        return 1 /* Greater */;
    if (b > a || (strict && ((b === 0 && a == 0) || (b === null && a === VOID0))))
        return -1 /* Less */;
    return NaN;
}
exports.compare = compare;
/**
 * Determines if two primitives are equal or if two objects have the same key/value combinations.
 * @param a
 * @param b
 * @param nullEquivalency If true, null/undefined will be equivalent to an empty object {}.
 * @param extraDepth
 * @returns {boolean}
 */
function areEquivalent(a, b, nullEquivalency = true, extraDepth = 0) {
    // Take a step by step approach to ensure efficiency.
    if (areEqual(a, b, true))
        return true;
    if (a == null || b == null) {
        if (!nullEquivalency)
            return false;
        if (type_1.default.isObject(a)) {
            return !Object.keys(a).length;
        }
        if (type_1.default.isObject(b)) {
            return !Object.keys(b).length;
        }
        return a == null && b == null;
    }
    if (type_1.default.isObject(a) && type_1.default.isObject(b)) {
        const aKeys = Object.keys(a), bKeys = Object.keys(b), len = aKeys.length;
        if (len !== bKeys.length)
            return false;
        aKeys.sort();
        bKeys.sort();
        for (let i = 0; i < len; i++) {
            const key = aKeys[i];
            if (key !== bKeys[i] || !areEqual(a[key], b[key], true))
                return false;
        }
        // Doesn't track circular references but allows for controlling the amount of recursion.
        if (extraDepth > 0) {
            for (const key of aKeys) {
                if (!areEquivalent(a[key], b[key], nullEquivalency, extraDepth - 1))
                    return false;
            }
        }
        return true;
    }
    return false;
}
exports.areEquivalent = areEquivalent;
//# sourceMappingURL=compare.js.map