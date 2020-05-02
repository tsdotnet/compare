/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {compare} from './compare';
import {Comparable} from './Comparable';
import Comparer from './Comparer';
import {Comparison} from './Comparison';
import SortContext from './SortContext';
import Order from './Order';

type Selector<T, TKey> = (e: T) => TKey;

function identity<T> (e: T): T { return e; }

export default class KeySortedContext<T, TKey extends Comparable>
	extends SortContext<T>
{
	constructor (
		next: Comparer<T> | null,
		protected _keySelector: Selector<T, TKey> | null,
		order: Order            = Order.Ascending,
		comparer: Comparison<T> = compare
	)
	{
		super(next, comparer, order);
	}

	compare (a: T, b: T): number
	{
		const ks = this._keySelector;
		if(!ks || ks===identity) return super.compare(a, b);
		// We force <any> here since it can be a primitive or Comparable<any>
		const d = compare(ks(a) as any, ks(b) as any);
		if(d===0 && this._next) return this._next.compare(a, b);
		return this._order*d;
	}
}