import typeUtil from '@tsdotnet/type';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
var isTrueNaN = typeUtil.isTrueNaN;
function areEqual(a, b) {
    return a === b || (isTrueNaN(a) && isTrueNaN(b));
}

export { areEqual as default };
//# sourceMappingURL=areEqual.js.map
