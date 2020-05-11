/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import type from './type';
import CompareResult from './CompareResult';
import ComparableObject from './Comparable';
import {comparePrimitives} from './comparePrimitives';

const COMPARE_TO = 'compareTo';

/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 */
export function compare<T> (a: ComparableObject<T>, b: T): number;
export function compare<T> (a: T, b: ComparableObject<T>): number;
export function compare<T extends type.Primitive> (
	a: T,
	b: T,
	strict?: boolean): CompareResult;
export function compare (
	a: any,
	b: any,
	strict: boolean = true): CompareResult
{
	if(a && type.hasMember(a, COMPARE_TO)) return a.compareTo(b);
	// If a has compareTo, use it.
	else if(b && type.hasMember(b, COMPARE_TO)) return -b.compareTo(a); // a doesn't have compareTo? check if b does and invert.

	return comparePrimitives(a, b, strict);
}

/**
 * Compares two comparable objects or primitives and inverts the sign of the result.
 * @param a
 * @param b
 */
export function compareInverted<T> (a: ComparableObject<T>, b: T): number;
export function compareInverted<T> (a: T, b: ComparableObject<T>): number;
export function compareInverted<T extends type.Primitive> (
	a: T,
	b: T,
	strict?: boolean): CompareResult;
export function compareInverted (
	a: any,
	b: any,
	strict: boolean = true): CompareResult
{
	return compare(a, b, strict)* -1;
}


