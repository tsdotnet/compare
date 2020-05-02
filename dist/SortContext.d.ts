/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { Comparison } from './Comparison';
import Order from './Order';
import Comparer from './Comparer';
export default class SortContext<T> implements Comparer<T> {
    protected _next: Comparer<T> | null;
    protected _comparer: Comparison<T>;
    protected _order: Order;
    constructor(_next: Comparer<T> | null, _comparer?: Comparison<T>, _order?: Order);
    /**
     * Direction of the comparison.
     * @type {Order}
     */
    get order(): Order;
    /**
     * Generates an array of indexes from the source in order of their expected internalSort without modifying the source.
     * @param source
     * @returns {number[]}
     */
    generateSortedIndexes(source: T[]): number[];
    /**
     * Compares two values based upon SortContext parameters.
     * @param a
     * @param b
     * @returns {any}
     */
    compare(a: T, b: T): number;
}
