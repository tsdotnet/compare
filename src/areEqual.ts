/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import type from './type';
import isTrueNaN = type.isTrueNaN;

/**
 * Used for special identity (===) comparison including NaN.
 * @param a
 * @param b
 * @returns {boolean|any}
 */
export default function areEqual (a: any, b: any): boolean {
	return a===b || (isTrueNaN(a) && isTrueNaN(b));
}
