/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { Comparable } from './Comparable';
import Comparer from './Comparer';
import { Comparison } from './Comparison';
import SortContext from './SortContext';
import Order from './Order';
declare type Selector<T, TKey> = (e: T) => TKey;
export default class KeySortedContext<T, TKey extends Comparable> extends SortContext<T> {
    protected _keySelector: Selector<T, TKey> | null;
    constructor(next: Comparer<T> | null, _keySelector: Selector<T, TKey> | null, order?: Order, comparer?: Comparison<T>);
    compare(a: T, b: T): number;
}
export {};
