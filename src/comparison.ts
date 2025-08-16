/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import type {Primitive, Selector} from '@tsdotnet/common-interfaces';
import {Comparison} from './Comparable';
import comparePrimitives from './comparePrimitives';
import CompareResult from './CompareResult';
import Order from './Order';
import {OrderByComparison, OrderByKey, OrderBySelector} from './OrderBy';

 
namespace comparison
{
	/**
	 * Creates a comparison function from selector.
	 * @param {Selector<T, Primitive>} selector
	 * @param {Order} order
	 * @return {Comparison<T>}
	 */
	export function fromSelector<T> (
		selector: Selector<T, Primitive>,
		order: Order = Order.Ascending): Comparison<T>
	{
		if(order!== -1) order = 1;
		return function(a: T, b: T): CompareResult {
			return comparePrimitives(selector(a), selector(b))*order!;
		};
	}

	/**
	 * Creates a comparison function from a key of an object.
	 * @param {keyof T} key
	 * @param {Order} order
	 * @return {Comparison<T>}
	 */
	export function fromKey<T extends object> (
		key: keyof T,
		order: Order = Order.Ascending): Comparison<T>
	{
		if(order!== -1) order = 1;
		return function(a: T, b: T): CompareResult {
			 
			return comparePrimitives(a[key] as any, b[key] as any)*order!;
		};
	}

	/**
	 * Creates a comparison function with specific ordering by key.
	 * @param {{[key]: Order}} keys
	 * @return {Comparison<T>}
	 */
	export function fromKeys<T extends object> (keys: (keyof T)[]): Comparison<T>;
	export function fromKeys<T extends object> (keys: { [P in keyof T]?: Order }): Comparison<T>;
	export function fromKeys<T extends Record<PropertyKey, unknown>> (keys: (keyof T)[] | { [P in keyof T]?: Order }): Comparison<T>
	{
		return keys instanceof Array
			? join(keys.map(k => fromKey(k)))
			: join(Object.keys(keys).map(k => fromKey(k, keys[k])));
	}

	/**
	 * Joins comparison functions into one by evaluating equality in comparison order.
	 * @param {Iterable<Comparison<T>>} comparisons
	 * @return {Comparison<T>}
	 */
	export function join<T> (comparisons: Iterable<Comparison<T>>): Comparison<T>
	{
		return function(a: T, b: T): number {
			for(const c of comparisons)
			{
				const o = c(a, b);
				if(o!==0) return o;
			}
			return 0;
		};
	}

	/**
	 * Converts any order-by combination into a single comparison function.
	 * @param {OrderBySelector<T> | OrderByComparison<T> | [(OrderByComparison<T> | OrderBySelector<T>)]} orderBy
	 * @return {Comparison<T>}
	 */
	export function from<T> (
		orderBy: OrderBySelector<T> | OrderByComparison<T> | [OrderByComparison<T> | OrderBySelector<T>]): Comparison<T>;
	export function from<T extends object> (
		orderBy: OrderByKey<T> | OrderBySelector<T> | OrderByComparison<T> | [OrderByKey<T> | OrderBySelector<T> | OrderByComparison<T>]): Comparison<T>;
	 
	export function from (orderBy: any): Comparison<any>
	{
		if(typeof orderBy==='string') return fromKey(orderBy);
		if(orderBy instanceof Array) return join(orderBy.map(from));

		if('key' in orderBy) return fromKey(orderBy.key, orderBy.order);
		if('selector' in orderBy) return fromSelector(orderBy.selector, orderBy.order);
		if('comparison' in orderBy)
		{
			return orderBy.order=== -1
				? invert(orderBy.comparison)
				: orderBy.comparison;
		}

		if(typeof orderBy==='function')
		{
			if(orderBy.length>1) return orderBy;
			if(orderBy.length==1) return fromSelector(orderBy);
		}

		throw new TypeError('Unknown order-by to comparison evaluator.');
	}

	/**
	 * Inverts a comparison function's order.
	 * @param {Comparison<T>} comparison
	 * @return {Comparison<T>}
	 */
	export function invert<T> (comparison: Comparison<T>): Comparison<T>
	{
		return function(a: T, b: T): CompareResult {
			return comparison(a, b)* -1;
		};
	}
}

export default comparison;
