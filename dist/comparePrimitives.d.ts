/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import CompareResult from './CompareResult';
import type from './type';
/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 * @param strict If true (default) will ensure strict identity (===).  False will allow equality (==).
 */
export declare function comparePrimitives<T extends type.Primitive>(a: T, b: T, strict?: boolean): CompareResult;
/**
 * Compares two comparable objects or primitives and inverts the sign of the result.
 * @param a
 * @param b
 * @param strict If true (default) will ensure strict identity (===).  False will allow equality (==).
 */
export declare function comparePrimitivesInverted<T extends type.Primitive>(a: T, b: T, strict?: boolean): CompareResult;
