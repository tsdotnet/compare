/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import type from './type';
import {areEqual} from './areEqual';

/**
 * Determines if two primitives are equal or if two objects have the same key/value combinations.
 * @param a
 * @param b
 * @param nullEquivalency If true, null/undefined will be equivalent to an empty object {}.
 * @param extraDepth
 * @returns {boolean}
 */
export function areEquivalent (
	a: any,
	b: any,
	nullEquivalency: boolean = true,
	extraDepth: number       = 0): boolean
{
	// Take a step by step approach to ensure efficiency.
	if(areEqual(a, b, true)) return true;

	if(a==null || b==null)
	{
		if(!nullEquivalency) return false;

		if(type.isObject(a))
		{
			return !Object.keys(a).length;
		}

		if(type.isObject(b))
		{
			return !Object.keys(b).length;
		}

		return a==null && b==null;
	}

	if(type.isObject(a) && type.isObject(b))
	{
		const
			aKeys = Object.keys(a),
			bKeys = Object.keys(b),
			len   = aKeys.length;
		if(len!==bKeys.length) return false;

		aKeys.sort();
		bKeys.sort();

		for(let i = 0; i<len; i++)
		{
			const key = aKeys[i];
			if(key!==bKeys[i] || !areEqual(a[key], b[key], true)) return false;
		}

		// Doesn't track circular references but allows for controlling the amount of recursion.
		if(extraDepth>0)
		{
			for(const key of aKeys)
			{
				if(!areEquivalent(a[key], b[key], nullEquivalency, extraDepth - 1)) return false;
			}
		}

		return true;
	}

	return false;
}
