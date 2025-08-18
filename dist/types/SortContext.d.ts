/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type { Comparer, Comparison } from './Comparable';
import Order from './Order';
export default class SortContext<T> implements Comparer<T> {
    protected _next: Comparer<T> | null;
    protected _comparer: Comparison<T>;
    protected _order: Order;
    constructor(_next: Comparer<T> | null, _comparer: Comparison<T>, _order?: Order);
    get order(): Order;
    private _comparison;
    get comparison(): Comparison<T>;
    generateSortedIndexes(source: T[]): number[];
    compare(a: T, b: T): number;
}
