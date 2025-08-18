/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type { Selector } from '@tsdotnet/common-interfaces';
import { Comparable, Comparer, Comparison } from './Comparable';
import Order from './Order';
import SortContext from './SortContext';
export default class KeySortedContext<T, TKey extends Comparable> extends SortContext<T> {
    protected _keySelector: Selector<T, TKey> | null;
    constructor(next: Comparer<T> | null, keySelector: Selector<T, TKey> | null, order?: Order, comparer?: Comparison<T>);
    compare(a: T, b: T): number;
}
