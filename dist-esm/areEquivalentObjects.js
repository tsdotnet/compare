/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * @packageDocumentation
 * @module compare
 */
import type from '@tsdotnet/type';
import areEqual from './areEqual';
/**
 * Determines if two primitives are equal or if two objects have the same key/value combinations.
 * @param a
 * @param b
 * @param nullEquivalency If true, null/undefined will be equivalent to an empty object {}.
 * @param extraDepth
 * @returns {boolean}
 */
export default function areEquivalentObjects(a, b, nullEquivalency = true, extraDepth = 0) {
    // Take a step by step approach to ensure efficiency.
    if (areEqual(a, b))
        return true;
    const aKeys = type.isObject(a) && Object.keys(a), bKeys = type.isObject(b) && Object.keys(b);
    if (a == null || b == null) {
        if (!nullEquivalency)
            return false;
        if (aKeys)
            return !aKeys.length;
        if (bKeys)
            return !bKeys.length;
        return a == null && b == null;
    }
    if (aKeys && bKeys) {
        const len = aKeys.length;
        if (len !== bKeys.length)
            return false;
        aKeys.sort();
        bKeys.sort();
        for (let i = 0; i < len; i++) {
            const key = aKeys[i];
            if (key !== bKeys[i] || !areEqual(a[key], b[key]))
                return false;
        }
        // Doesn't track circular references but allows for controlling the amount of recursion.
        if (extraDepth > 0) {
            for (const key of aKeys) {
                if (!areEquivalentObjects(a[key], b[key], nullEquivalency, extraDepth - 1))
                    return false;
            }
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=areEquivalentObjects.js.map