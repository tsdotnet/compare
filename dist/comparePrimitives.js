"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const areEqual_1 = tslib_1.__importDefault(require("./areEqual"));
/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 * @param strict If true (default) will ensure strict identity (===).  False will allow equality (==).
 */
function comparePrimitives(a, b, strict = true) {
    if (areEqual_1.default(a, b, strict))
        return 0 /* Equal */;
    // Allow for special inequality..
    if (a > b || (strict && ((a === 0 && b == 0) || (a === null && b === undefined))))
        return 1 /* Greater */;
    if (b > a || (strict && ((b === 0 && a == 0) || (b === null && a === undefined))))
        return -1 /* Less */;
    return NaN;
}
exports.comparePrimitives = comparePrimitives;
/**
 * Compares two comparable objects or primitives and inverts the sign of the result.
 * @param a
 * @param b
 * @param strict If true (default) will ensure strict identity (===).  False will allow equality (==).
 */
function comparePrimitivesInverted(a, b, strict = true) {
    return comparePrimitives(a, b, strict) * -1;
}
exports.comparePrimitivesInverted = comparePrimitivesInverted;
//# sourceMappingURL=comparePrimitives.js.map