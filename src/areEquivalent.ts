/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import typeUtil from '@tsdotnet/type';
import isTrueNaN = typeUtil.isTrueNaN;

/**
 * Used for special equality (==) comparison including NaN.
 * @param a
 * @param b
 * @returns {boolean|any}
 */
export default function areEquivalent (a: unknown, b: unknown): boolean {
	return a==b || (isTrueNaN(a) && isTrueNaN(b));
}
