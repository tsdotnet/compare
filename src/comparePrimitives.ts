/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {areEqual} from './areEqual';
import CompareResult from './CompareResult';
import type from './type';

/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 * @param strict If true (default) will ensure strict identity (===).  False will allow equality (==).
 */
export function comparePrimitives<T extends type.Primitive> (
	a: T,
	b: T,
	strict: boolean = true): CompareResult
{
	if(areEqual(a, b, strict)) return CompareResult.Equal;

	// Allow for special inequality..
	if(a>b || (strict && ((a===0 && b==0) || (a===null && b===undefined)))) return CompareResult.Greater;
	if(b>a || (strict && ((b===0 && a==0) || (b===null && a===undefined)))) return CompareResult.Less;

	return NaN;
}

/**
 * Compares two comparable objects or primitives and inverts the sign of the result.
 * @param a
 * @param b
 * @param strict If true (default) will ensure strict identity (===).  False will allow equality (==).
 */
export function comparePrimitivesInverted<T extends type.Primitive> (
	a: T,
	b: T,
	strict: boolean = true): CompareResult
{
	return comparePrimitives(a, b, strict)* -1;
}
