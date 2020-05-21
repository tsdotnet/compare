/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * @packageDocumentation
 * @module compare
 */
import { Selector } from '@tsdotnet/common-interfaces';
import { Comparable, Comparer, Comparison } from './Comparable';
import Order from './Order';
import SortContext from './SortContext';
/**
 * A class for helping in complex sorting patterns using a key selector.
 */
export default class KeySortedContext<T, TKey extends Comparable> extends SortContext<T> {
    protected _keySelector: Selector<T, TKey> | null;
    /**
     * Constructs a KeySortedContext.
     * @param {Comparer | null} next If provided (not null) any items that are considered equal will use this comparer to decided their order.
     * @param {Selector | null} keySelector If provided (not null) will use the selected keys to order the results.
     * @param {Order} order Ascending or Descending.
     * @param {Comparison} comparer The comparison function.  The default handles most cases.
     */
    constructor(next: Comparer<T> | null, keySelector: Selector<T, TKey> | null, order?: Order, comparer?: Comparison<T>);
    compare(a: T, b: T): number;
}
