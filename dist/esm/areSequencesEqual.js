import areEqual from './areEqual.js';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
function areSequencesEqual(a, b, equalityComparer = areEqual) {
    if (a === b)
        return true;
    if (a == null || b == null)
        return false;
    if (a instanceof Array
        && b instanceof Array
        && a.length != b.length)
        return false;
    const aI = a[Symbol.iterator](), bI = b[Symbol.iterator]();
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

export { areSequencesEqual as default };
//# sourceMappingURL=areSequencesEqual.js.map
