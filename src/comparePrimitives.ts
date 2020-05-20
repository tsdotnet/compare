/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {Primitive} from '@tsdotnet/common-interfaces';
import areEqual from './areEqual';
import CompareResult from './CompareResult';


/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 */
function comparePrimitives<T extends Primitive> (a: T, b: T): CompareResult
{
	if(areEqual(a, b)) return CompareResult.Equal;

	// Allow for special inequality..
	if(a>b || a===0 && b==0 || a===null && b===undefined) return CompareResult.Greater;
	if(b>a || b===0 && a==0 || b===null && a===undefined) return CompareResult.Less;

	return NaN;
}

namespace comparePrimitives
{
	/**
	 * Compares two comparable objects or primitives and inverts the sign of the result.
	 * @param a
	 * @param b
	 */
	export function inverted<T extends Primitive> (a: T, b: T): CompareResult
	{
		return -comparePrimitives(a, b);
	}
}

export default comparePrimitives;

