/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import type from './type';
import isTrueNaN = type.isTrueNaN;

/**
 * Used for special comparison including NaN.
 * @param a
 * @param b
 * @param strict
 * @returns {boolean|any}
 */
export function areEqual (a: any, b: any, strict: boolean = true): boolean
{
	return a===b || (!strict && a==b) || (isTrueNaN(a) && isTrueNaN(b));
}
