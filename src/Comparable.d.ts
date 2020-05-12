/*!
 * @author electricessence / https://github.com/electricessence/
 * Based upon .NET source.
 * Licensing: MIT
 */

export interface ComparableObject<T>
{
	compareTo (other: T): number;
}

export declare type Comparable = string | number | boolean | ComparableObject<any>;

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
