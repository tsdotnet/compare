/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type { Comparer, Comparison } from './Comparable.js';
import { type OrderOrValue } from './Order.js';
export default class SortContext<T> implements Comparer<T> {
    protected _next: Comparer<T> | null;
    protected _comparer: Comparison<T>;
    protected _order: OrderOrValue;
    constructor(_next: Comparer<T> | null, _comparer: Comparison<T>, _order?: OrderOrValue);
    get order(): OrderOrValue;
    private _comparison;
    get comparison(): Comparison<T>;
    generateSortedIndexes(source: T[]): number[];
    compare(a: T, b: T): number;
}
