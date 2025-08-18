import areEqual from './areEqual.js';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
function comparePrimitives(a, b) {
    if (areEqual(a, b))
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
var comparePrimitives$1 = comparePrimitives;

export { comparePrimitives$1 as default };
//# sourceMappingURL=comparePrimitives.js.map
