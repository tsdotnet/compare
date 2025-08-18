/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type { EqualityComparison } from './Comparable';
export default function areSequencesEqual<T>(a: Iterable<T>, b: Iterable<T>, equalityComparer?: EqualityComparison<T>): boolean;
