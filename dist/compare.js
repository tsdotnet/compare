"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const comparePrimitives_1 = tslib_1.__importDefault(require("./comparePrimitives"));
const type_1 = tslib_1.__importDefault(require("./type"));
const COMPARE_TO = 'compareTo';
function compare(a, b) {
    if (a && type_1.default.hasMember(a, COMPARE_TO))
        return a.compareTo(b);
    // If a has compareTo, use it.
    else if (b && type_1.default.hasMember(b, COMPARE_TO))
        return -b.compareTo(a); // a doesn't have compareTo? check if b does and invert.
    return comparePrimitives_1.default(a, b);
}
(function (compare) {
    function compareInverted(a, b) {
        return -compare(a, b);
    }
    compare.compareInverted = compareInverted;
    compare.primitives = comparePrimitives_1.default;
})(compare || (compare = {}));
exports.default = compare;
//# sourceMappingURL=compare.js.map