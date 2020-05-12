/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {ComparableObject} from './Comparable';
import comparePrimitives from './comparePrimitives';
import CompareResult from './CompareResult';
import type from './type';

const COMPARE_TO = 'compareTo';

/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 */
function compare<T> (a: ComparableObject<T>, b: T): number;
function compare<T> (a: T, b: ComparableObject<T>): number;
function compare<T extends type.Primitive> (a: T, b: T): CompareResult;
function compare (a: any, b: any): CompareResult
{
	if(a && type.hasMember(a, COMPARE_TO)) return a.compareTo(b);
	// If a has compareTo, use it.
	else if(b && type.hasMember(b, COMPARE_TO)) return -b.compareTo(a); // a doesn't have compareTo? check if b does and invert.

	return comparePrimitives(a, b);
}

namespace compare
{
	/**
	 * Compares two comparable objects or primitives and inverts the sign of the result.
	 * @param a
	 * @param b
	 */
	export function compareInverted<T> (a: ComparableObject<T>, b: T): number;
	export function compareInverted<T> (a: T, b: ComparableObject<T>): number;
	export function compareInverted<T extends type.Primitive> (a: T, b: T): CompareResult;
	export function compareInverted (a: any, b: any): CompareResult
	{
		return -compare(a, b);
	}

	export const primitives = comparePrimitives;
}

export default compare;



