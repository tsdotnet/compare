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
 */
function comparePrimitives(a, b) {
    if ((0, areEqual_1.default)(a, b))
        return 0 /* CompareResult.Equal */;
    // Allow for special inequality..
    if (a > b || a === 0 && b == 0 || a === null && b === undefined)
        return 1 /* CompareResult.Greater */;
    if (b > a || b === 0 && a == 0 || b === null && a === undefined)
        return -1 /* CompareResult.Less */;
    return NaN;
}
(function (comparePrimitives) {
    /**
     * Compares two comparable objects or primitives and inverts the sign of the result.
     * @param a
     * @param b
     */
    function inverted(a, b) {
        return -comparePrimitives(a, b);
    }
    comparePrimitives.inverted = inverted;
})(comparePrimitives || (comparePrimitives = {}));
exports.default = comparePrimitives;
//# sourceMappingURL=comparePrimitives.js.map