import typeUtil from '@tsdotnet/type';
import areEqual from './areEqual';
import areEquivalentObjects from './areEquivalent';
import areEquivalent from './areEquivalent';
import areSequencesEqual from './areSequencesEqual';
import type { Comparer, ComparableObject, Comparable, Comparison, EqualityComparison } from './Comparable';
import * as comparison from './comparison';
import compare from './compare';
import CompareResult from './CompareResult';
import KeySortedContext from './KeySortedContext';
import Order, { type OrderOrValue } from './Order';
import SortContext from './SortContext';
import EqualityOperator from './EqualityOperator';

export {
	areEqual,
	areEquivalent,
	areEquivalentObjects,
	areSequencesEqual,
	compare,
	typeUtil as type,
	type Comparer,
	type ComparableObject,
	type Comparable,
	type Comparison,
	type EqualityComparison,
	comparison,
	CompareResult,
	EqualityOperator,
	Order, OrderOrValue,
	SortContext,
	KeySortedContext
};
