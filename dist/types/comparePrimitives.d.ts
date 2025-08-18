/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type { Primitive } from '@tsdotnet/common-interfaces';
import CompareResult from './CompareResult';
declare function comparePrimitives<T extends Primitive>(a: T, b: T): CompareResult;
declare namespace comparePrimitives {
    function inverted<T extends Primitive>(a: T, b: T): CompareResult;
}
export default comparePrimitives;
