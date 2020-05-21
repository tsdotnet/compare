/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * @packageDocumentation
 * @module compare
 */
import type from '@tsdotnet/type';
var isTrueNaN = type.isTrueNaN;
/**
 * Used for special equality (==) comparison including NaN.
 * @param a
 * @param b
 * @returns {boolean|any}
 */
export default function areEquivalent(a, b) {
    return a == b || (isTrueNaN(a) && isTrueNaN(b));
}
//# sourceMappingURL=areEquivalent.js.map