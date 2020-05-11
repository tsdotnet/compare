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
export default class KeySortedContext<T, TKey extends Comparable> extends SortContext<T> {
    protected _keySelector: Selector<T, TKey> | null;
    constructor(next: Comparer<T> | null, _keySelector: Selector<T, TKey> | null, order?: Order, comparer?: Comparison<T>);
    compare(a: T, b: T): number;
}
