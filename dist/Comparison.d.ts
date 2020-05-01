/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

export interface Comparison<T> {
	(a: T, b: T): number;
	(a: T, b: T, strict: boolean): number;
	(a: T, b: T, strict?: boolean): number;
}

export interface EqualityComparison<T> {
	(a: T, b: T): boolean;
	(a: T, b: T, strict: boolean): boolean;
	(a: T, b: T, strict?: boolean): boolean;
}
