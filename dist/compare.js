"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const comparePrimitives_1 = require("./comparePrimitives");
const type_1 = tslib_1.__importDefault(require("./type"));
const COMPARE_TO = 'compareTo';
function compare(a, b, strict = true) {
    if (a && type_1.default.hasMember(a, COMPARE_TO))
        return a.compareTo(b);
    // If a has compareTo, use it.
    else if (b && type_1.default.hasMember(b, COMPARE_TO))
        return -b.compareTo(a); // a doesn't have compareTo? check if b does and invert.
    return comparePrimitives_1.comparePrimitives(a, b, strict);
}
exports.compare = compare;
function compareInverted(a, b, strict = true) {
    return compare(a, b, strict) * -1;
}
exports.compareInverted = compareInverted;
//# sourceMappingURL=compare.js.map