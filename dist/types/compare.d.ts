/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type { Primitive } from '@tsdotnet/common-interfaces';
import { type ComparableObject } from './Comparable';
import comparePrimitives from './comparePrimitives';
import CompareResult from './CompareResult';
declare function compare<T>(a: ComparableObject<T>, b: T): number;
declare function compare<T>(a: T, b: ComparableObject<T>): number;
declare function compare<T extends Primitive>(a: T, b: T): CompareResult;
declare namespace compare {
    function compareInverted<T>(a: ComparableObject<T>, b: T): number;
    function compareInverted<T>(a: T, b: ComparableObject<T>): number;
    function compareInverted<T extends Primitive>(a: T, b: T): CompareResult;
    const primitives: typeof comparePrimitives;
}
export default compare;
