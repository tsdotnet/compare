import typeUtil from '@tsdotnet/type';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
var isTrueNaN = typeUtil.isTrueNaN;
function areEquivalent(a, b) {
    return a == b || (isTrueNaN(a) && isTrueNaN(b));
}

export { areEquivalent as default };
//# sourceMappingURL=areEquivalent.js.map
