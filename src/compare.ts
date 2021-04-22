/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {Primitive} from '@tsdotnet/common-interfaces';
import type from '@tsdotnet/type';
import {ComparableObject} from './Comparable';
import comparePrimitives from './comparePrimitives';
import CompareResult from './CompareResult';

const COMPARE_TO = 'compareTo';

/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 */
function compare<T> (a: ComparableObject<T>, b: T): number;
function compare<T> (a: T, b: ComparableObject<T>): number;
function compare<T extends Primitive> (a: T, b: T): CompareResult;
function compare (a: unknown, b: unknown): CompareResult
{
	if(a && type.hasMember<ComparableObject<unknown>>(a, COMPARE_TO)) return a.compareTo(b);
	// If a has compareTo, use it.
	else if(b && type.hasMember<ComparableObject<unknown>>(b, COMPARE_TO)) return -b.compareTo(a); // a doesn't have compareTo? check if b does and invert.

	return comparePrimitives<any>(a, b);
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
	export function compareInverted<T extends Primitive> (a: T, b: T): CompareResult;
	export function compareInverted (a: unknown, b: unknown): CompareResult
	{
		return -compare<any>(a, b);
	}

	export const primitives = comparePrimitives;
}

export default compare;



