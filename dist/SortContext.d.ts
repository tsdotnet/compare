/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * @packageDocumentation
 * @module compare
 */
import { Comparer, Comparison } from './Comparable';
import Order from './Order';
/**
 * A class for helping in complex sorting patterns.
 */
export default class SortContext<T> implements Comparer<T> {
    protected _next: Comparer<T> | null;
    protected _comparer: Comparison<T>;
    protected _order: Order;
    /**
     * Constructs a SortContext.
     * @param {Comparer | null} _next If provided (not null) any items that are considered equal will use this comparer to decided their order.
     * @param {Comparison} _comparer The comparison function that will differentiate between items.
     * @param {Order} _order Ascending or Descending.
     */
    constructor(_next: Comparer<T> | null, _comparer: Comparison<T>, _order?: Order);
    /**
     * Direction of the comparison.
     * @type {Order}
     */
    get order(): Order;
    private _comparison;
    /**
     * A scope safe comparison function (delegate).
     * @return {Comparison}
     */
    get comparison(): Comparison<T>;
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
