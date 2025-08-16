"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = areEqual;
const tslib_1 = require("tslib");
const type_1 = tslib_1.__importDefault(require("@tsdotnet/type"));
var isTrueNaN = type_1.default.isTrueNaN;
/**
 * Used for special identity (===) comparison including NaN.
 * @param a
 * @param b
 * @returns {boolean|any}
 */
function areEqual(a, b) {
    return a === b || (isTrueNaN(a) && isTrueNaN(b));
}
//# sourceMappingURL=areEqual.js.map