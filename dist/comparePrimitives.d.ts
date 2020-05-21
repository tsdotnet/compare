/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * @packageDocumentation
 * @module compare
 */
import { Primitive } from '@tsdotnet/common-interfaces';
import CompareResult from './CompareResult';
/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 */
declare function comparePrimitives<T extends Primitive>(a: T, b: T): CompareResult;
declare namespace comparePrimitives {
    /**
     * Compares two comparable objects or primitives and inverts the sign of the result.
     * @param a
     * @param b
     */
    function inverted<T extends Primitive>(a: T, b: T): CompareResult;
}
export default comparePrimitives;
