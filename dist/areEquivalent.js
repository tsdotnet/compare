"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_1 = tslib_1.__importDefault(require("./type"));
const areEqual_1 = require("./areEqual");
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
    if (areEqual_1.areEqual(a, b, true))
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
            if (key !== bKeys[i] || !areEqual_1.areEqual(a[key], b[key], true))
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
//# sourceMappingURL=areEquivalent.js.map