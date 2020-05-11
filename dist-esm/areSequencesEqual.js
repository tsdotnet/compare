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
    const e1 = a[Symbol.iterator](), e2 = b[Symbol.iterator]();
    // eslint-disable-next-line no-constant-condition
    while (true) {
        const n1 = e1.next(), n2 = e2.next();
        if (n1.done && n2.done)
            return true;
        if (n1.done || n2.done)
            return false;
        if (!equalityComparer(n1.value, n2.value))
            return false;
    }
}
//# sourceMappingURL=areSequencesEqual.js.map