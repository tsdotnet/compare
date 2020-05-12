/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import areEqual from './areEqual';
/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 */
function comparePrimitives(a, b) {
    if (areEqual(a, b))
        return 0 /* Equal */;
    // Allow for special inequality..
    if (a > b || a === 0 && b == 0 || a === null && b === undefined)
        return 1 /* Greater */;
    if (b > a || b === 0 && a == 0 || b === null && a === undefined)
        return -1 /* Less */;
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
export default comparePrimitives;
//# sourceMappingURL=comparePrimitives.js.map