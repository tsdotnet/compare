/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {Comparer, Comparison} from './Comparable';
import Order from './Order';

/**
 * A class for helping in complex sorting patterns.
 */
export default class SortContext<T>
implements Comparer<T>
{
	/**
	 * Constructs a SortContext.
	 * @param {Comparer | null} _next If provided (not null) any items that are considered equal will use this comparer to decided their order.
	 * @param {Comparison} _comparer The comparison function that will differentiate between items.
	 * @param {Order} _order Ascending or Descending.
	 */
	constructor (
		protected _next: Comparer<T> | null,
		protected _comparer: Comparison<T>,
		protected _order: Order = Order.Ascending
	)
	{}

	/**
	 * Direction of the comparison.
	 * @type {Order}
	 */
	get order (): Order
	{
		return this._order;
	}

	private _comparison: Comparison<T> | undefined;

	/**
	 * A scope safe comparison function (delegate).
	 * @return {Comparison}
	 */
	get comparison (): Comparison<T>
	{
		if(this._comparison) return this._comparison;
		const c = (a: T, b: T): number => this.compare(a, b);
		this._comparison = c;
		return c;
	}

	/**
	 * Generates an array of indexes from the source in order of their expected internalSort without modifying the source.
	 * @param source
	 * @returns {number[]}
	 */
	generateSortedIndexes (source: T[]): number[]
	{
		if(source==null) return [];
		const result: number[] = source.map((s, i) => i);
		result.sort((a, b) => {
			const valueA = source[a];
			const valueB = source[b];
			// Handle undefined values that might occur if indices are out of bounds
			if (valueA === undefined && valueB === undefined) return 0;
			if (valueA === undefined) return -1;
			if (valueB === undefined) return 1;
			return this.compare(valueA, valueB);
		});
		return result;
	}

	/**
	 * Compares two values based upon SortContext parameters.
	 * @param a
	 * @param b
	 * @returns {any}
	 */
	compare (a: T, b: T): number
	{
		const d = this._comparer(a, b);
		if(d===0 && this._next) return this._next.compare(a, b);
		return this._order*d;
	}
}
