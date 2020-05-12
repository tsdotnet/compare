/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { Primitive, Selector } from '@tsdotnet/common-interfaces';
import { Comparison } from './Comparable';
import Order from './Order';
import { OrderByComparison, OrderByKey, OrderBySelector } from './OrderBy';
declare namespace comparison {
    /**
     * Creates a comparison function from selector.
     * @param {Selector<T, Primitive>} selector
     * @param {Order} order
     * @return {Comparison<T>}
     */
    function fromSelector<T>(selector: Selector<T, Primitive>, order?: Order): Comparison<T>;
    /**
     * Creates a comparison function from a key of an object.
     * @param {keyof T} key
     * @param {Order} order
     * @return {Comparison<T>}
     */
    function fromKey<T extends object>(key: keyof T, order?: Order): Comparison<T>;
    /**
     * Creates a comparison function with specific ordering by key.
     * @param {{[key]: Order}} keys
     * @return {Comparison<T>}
     */
    function fromKeys<T extends object>(keys: (keyof T)[]): Comparison<T>;
    function fromKeys<T extends object>(keys: {
        [P in keyof T]?: Order;
    }): Comparison<T>;
    /**
     * Joins comparison functions into one by evaluating equality in comparison order.
     * @param {Iterable<Comparison<T>>} comparisons
     * @return {Comparison<T>}
     */
    function join<T>(comparisons: Iterable<Comparison<T>>): Comparison<T>;
    /**
     * Converts any order-by combination into a single comparison function.
     * @param {OrderBySelector<T> | OrderByComparison<T> | [(OrderByComparison<T> | OrderBySelector<T>)]} orderBy
     * @return {Comparison<T>}
     */
    function from<T>(orderBy: OrderBySelector<T> | OrderByComparison<T> | [OrderByComparison<T> | OrderBySelector<T>]): Comparison<T>;
    function from<T extends object>(orderBy: OrderByKey<T> | OrderBySelector<T> | OrderByComparison<T> | [OrderByKey<T> | OrderBySelector<T> | OrderByComparison<T>]): Comparison<T>;
    /**
     * Inverts a comparison function's order.
     * @param {Comparison<T>} comparison
     * @return {Comparison<T>}
     */
    function invert<T>(comparison: Comparison<T>): Comparison<T>;
}
export default comparison;
