/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { ComparableObject } from './Comparable';
import CompareResult from './CompareResult';
import type from './type';
/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 */
export declare function compare<T>(a: ComparableObject<T>, b: T): number;
export declare function compare<T>(a: T, b: ComparableObject<T>): number;
export declare function compare<T extends type.Primitive>(a: T, b: T, strict?: boolean): CompareResult;
/**
 * Compares two comparable objects or primitives and inverts the sign of the result.
 * @param a
 * @param b
 */
export declare function compareInverted<T>(a: ComparableObject<T>, b: T): number;
export declare function compareInverted<T>(a: T, b: ComparableObject<T>): number;
export declare function compareInverted<T extends type.Primitive>(a: T, b: T, strict?: boolean): CompareResult;
