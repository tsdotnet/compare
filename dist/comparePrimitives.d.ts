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
 */
declare function comparePrimitives<T extends type.Primitive>(a: T, b: T): CompareResult;
declare namespace comparePrimitives {
    /**
     * Compares two comparable objects or primitives and inverts the sign of the result.
     * @param a
     * @param b
     */
    function inverted<T extends type.Primitive>(a: T, b: T): CompareResult;
}
export default comparePrimitives;
