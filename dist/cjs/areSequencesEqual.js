"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = areSequencesEqual;
const tslib_1 = require("tslib");
const areEqual_1 = tslib_1.__importDefault(require("./areEqual"));
function areSequencesEqual(a, b, equalityComparer = areEqual_1.default) {
    if (a === b)
        return true;
    if (a == null || b == null)
        return false;
    if (a instanceof Array
        && b instanceof Array
        && a.length != b.length)
        return false;
    const aI = a[Symbol.iterator](), bI = b[Symbol.iterator]();
    while (true) {
        const aN = aI.next(), bN = bI.next();
        if (aN.done && bN.done)
            return true;
        if (aN.done || bN.done)
            return false;
        if (!equalityComparer(aN.value, bN.value))
            return false;
    }
}
//# sourceMappingURL=areSequencesEqual.js.map