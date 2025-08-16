/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type from '@tsdotnet/type';
var isTrueNaN = type.isTrueNaN;
/**
 * Used for special identity (===) comparison including NaN.
 * @param a
 * @param b
 * @returns {boolean|any}
 */
export default function areEqual(a, b) {
    return a === b || (isTrueNaN(a) && isTrueNaN(b));
}
//# sourceMappingURL=areEqual.js.map