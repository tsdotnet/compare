/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { areEqual } from './index';
/**
 * Compares two sequences for equality.
 * @param {Iterable} a
 * @param {Iterable} b
 * @param {EqualityComparison} equalityComparer
 * @return {boolean}
 */
export default function areSequencesEqual(a, b, equalityComparer = areEqual) {
    if (a === b)
        return true;
    if (a instanceof Array
        && b instanceof Array
        && a.length != b.length)
        return false;
    const aI = a[Symbol.iterator](), bI = b[Symbol.iterator]();
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const aN = aI.next(), bN = bI.next();
        if (aN.done && bN.done)
            return true;
        if (aN.done || bN.done)
            return false;
        if (!equalityComparer(aN.value, bN.value))
            return false;
    }
}
//# sourceMappingURL=areSequencesEqual.js.map