/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type from './type';
var isTrueNaN = type.isTrueNaN;
/**
 * Used for special comparison including NaN.
 * @param a
 * @param b
 * @param strict
 * @returns {boolean|any}
 */
export default function areEqual(a, b, strict = true) {
    return a === b || (!strict && a == b) || (isTrueNaN(a) && isTrueNaN(b));
}
//# sourceMappingURL=areEqual.js.map