import typeUtil from '@tsdotnet/type';
import comparePrimitives from './comparePrimitives.js';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
const COMPARE_TO = 'compareTo';
function compare(a, b) {
    if (a && typeUtil.hasMember(a, COMPARE_TO))
        return a.compareTo(b);
    else if (b && typeUtil.hasMember(b, COMPARE_TO))
        return -b.compareTo(a);
    return comparePrimitives(a, b);
}
(function (compare) {
    function compareInverted(a, b) {
        return -compare(a, b);
    }
    compare.compareInverted = compareInverted;
    compare.primitives = comparePrimitives;
})(compare || (compare = {}));
var compare$1 = compare;

export { compare$1 as default };
//# sourceMappingURL=compare.js.map
