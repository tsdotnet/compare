"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const areEqual_1 = tslib_1.__importDefault(require("./areEqual"));
function comparePrimitives(a, b) {
    if ((0, areEqual_1.default)(a, b))
        return 0;
    if (a > b || a === 0 && b == 0 || a === null && b === undefined)
        return 1;
    if (b > a || b === 0 && a == 0 || b === null && a === undefined)
        return -1;
    return NaN;
}
(function (comparePrimitives) {
    function inverted(a, b) {
        return -comparePrimitives(a, b);
    }
    comparePrimitives.inverted = inverted;
})(comparePrimitives || (comparePrimitives = {}));
exports.default = comparePrimitives;
//# sourceMappingURL=comparePrimitives.js.map