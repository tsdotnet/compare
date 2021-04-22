/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { EqualityComparison } from './index';
/**
 * Compares two sequences for equality.
 * @param {Iterable} a
 * @param {Iterable} b
 * @param {EqualityComparison} equalityComparer
 * @return {boolean}
 */
export default function areSequencesEqual<T>(a: Iterable<T>, b: Iterable<T>, equalityComparer?: EqualityComparison<T>): boolean;
