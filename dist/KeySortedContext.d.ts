/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { Selector } from '@tsdotnet/common-interfaces';
import { Comparable } from './Comparable';
import { Comparison } from './Comparison';
import Comparer from './Comparer';
import SortContext from './SortContext';
import Order from './Order';
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
