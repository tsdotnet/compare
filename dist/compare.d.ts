/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { ComparableObject } from './Comparable';
import comparePrimitives from './comparePrimitives';
import CompareResult from './CompareResult';
import type from './type';
/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 */
declare function compare<T>(a: ComparableObject<T>, b: T): number;
declare function compare<T>(a: T, b: ComparableObject<T>): number;
declare function compare<T extends type.Primitive>(a: T, b: T): CompareResult;
declare namespace compare {
    /**
     * Compares two comparable objects or primitives and inverts the sign of the result.
     * @param a
     * @param b
     */
    function compareInverted<T>(a: ComparableObject<T>, b: T): number;
    function compareInverted<T>(a: T, b: ComparableObject<T>): number;
    function compareInverted<T extends type.Primitive>(a: T, b: T): CompareResult;
    const primitives: typeof comparePrimitives;
}
export default compare;
