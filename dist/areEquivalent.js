"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const type_1 = tslib_1.__importDefault(require("@tsdotnet/type"));
var isTrueNaN = type_1.default.isTrueNaN;
/**
 * Used for special equality (==) comparison including NaN.
 * @param a
 * @param b
 * @returns {boolean|any}
 */
function areEquivalent(a, b) {
    return a == b || (isTrueNaN(a) && isTrueNaN(b));
}
exports.default = areEquivalent;
//# sourceMappingURL=areEquivalent.js.map