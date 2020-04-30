/*!
 * @author electricessence / https://github.com/electricessence/
 * Based upon .NET source.
 * Licensing: MIT
 */

export default interface ComparableObject<T> {
	compareTo(other: T): number;
}

export declare type Comparable = string | number | boolean | ComparableObject<any>;
