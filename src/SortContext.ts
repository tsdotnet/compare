/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {compare} from './compare';
import {Comparison} from './Comparison';
import Order from './Order';
import Comparer from './Comparer';

export default class SortContext<T>
	implements Comparer<T>
{
	constructor (
		protected _next: Comparer<T> | null,
		protected _comparer: Comparison<T> = compare,
		protected _order: Order            = Order.Ascending
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

	/**
	 * Generates an array of indexes from the source in order of their expected internalSort without modifying the source.
	 * @param source
	 * @returns {number[]}
	 */
	generateSortedIndexes (source: T[]): number[]
	{
		if(source==null) return [];
		const result: number[] = source.map((s, i) => i);
		result.sort((a, b) => this.compare(source[a], source[b]));
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
