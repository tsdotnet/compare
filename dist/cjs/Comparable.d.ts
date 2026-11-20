/*!
 * @author electricessence / https://github.com/electricessence/
 * Based upon .NET source.
 * Licensing: MIT
 */

/**
 * An object that implements a compareTo method.
 * @template T The type that this object can be compared to.
 */
export interface ComparableObject<T>
{
	compareTo (other: T): number;
}

/**
 * Types that can be compared directly or through a ComparableObject.
 */
export declare type Comparable = string | number | boolean | ComparableObject<any>;

/**
 * An object that can compare two values of type T.
 * @template T The type of values this comparer can compare.
 */
export interface Comparer<T>
{
	compare (a: T, b: T): number;
}

export interface Comparison<T>
{
	(a: T, b: T): number;
}

export interface EqualityComparison<T>
{
	(a: T, b: T): boolean;
}
