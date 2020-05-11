import type from './type';
import Comparable from './Comparable';
import CompareResult from './CompareResult';
import {Comparison, EqualityComparison} from './Comparison';
import Order from './Order';
import SortContext from './SortContext';
import KeySortedContext from './KeySortedContext';
import {areEqual} from './areEqual';
import {areEquivalent} from './areEquivalent';
import {comparePrimitives, comparePrimitivesInverted} from './comparePrimitives';
import {compare, compareInverted} from './compare';

export {
	areEqual,
	areEquivalent,
	comparePrimitives,
	comparePrimitivesInverted,
	compare,
	compareInverted,
	type,
	Comparable,
	CompareResult,
	Comparison,
	EqualityComparison,
	Order,
	SortContext,
	KeySortedContext
};
