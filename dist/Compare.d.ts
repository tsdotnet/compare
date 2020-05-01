/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type from './type';
import Comparable from './Comparable';
import CompareResult from './CompareResult';
import { Comparison, EqualityComparison } from './Comparison';
export { type, Comparable, CompareResult, Comparison, EqualityComparison };
/**
 * Used for special comparison including NaN.
 * @param a
 * @param b
 * @param strict
 * @returns {boolean|any}
 */
export declare function areEqual(a: any, b: any, strict?: boolean): boolean;
/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 */
export declare function compare<T>(a: Comparable<T>, b: Comparable<T>): number;
export declare function compare<T extends type.Primitive>(a: T, b: T, strict?: boolean): CompareResult;
/**
 * Determines if two primitives are equal or if two objects have the same key/value combinations.
 * @param a
 * @param b
 * @param nullEquivalency If true, null/undefined will be equivalent to an empty object {}.
 * @param extraDepth
 * @returns {boolean}
 */
export declare function areEquivalent(a: any, b: any, nullEquivalency?: boolean, extraDepth?: number): boolean;
