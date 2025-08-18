/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import typeUtil from '@tsdotnet/type';
var isTrueNaN = typeUtil.isTrueNaN;
export default function areEquivalent(a, b) {
    return a == b || (isTrueNaN(a) && isTrueNaN(b));
}
//# sourceMappingURL=areEquivalent.js.map