/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type from '@tsdotnet/type';
import comparePrimitives from './comparePrimitives';
const COMPARE_TO = 'compareTo';
function compare(a, b) {
    if (a && type.hasMember(a, COMPARE_TO))
        return a.compareTo(b);
    // If a has compareTo, use it.
    else if (b && type.hasMember(b, COMPARE_TO))
        return -b.compareTo(a); // a doesn't have compareTo? check if b does and invert.
    return comparePrimitives(a, b);
}
(function (compare) {
    function compareInverted(a, b) {
        return -compare(a, b);
    }
    compare.compareInverted = compareInverted;
    compare.primitives = comparePrimitives;
})(compare || (compare = {}));
export default compare;
//# sourceMappingURL=compare.js.map