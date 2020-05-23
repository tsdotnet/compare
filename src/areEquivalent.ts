/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * @packageDocumentation
 * @module compare
 */

import type from '@tsdotnet/type';
import isTrueNaN = type.isTrueNaN;

/**
 * Used for special equality (==) comparison including NaN.
 * @param a
 * @param b
 * @returns {boolean|any}
 */
export default function areEquivalent (a: unknown, b: unknown): boolean {
	return a==b || (isTrueNaN(a) && isTrueNaN(b));
}
