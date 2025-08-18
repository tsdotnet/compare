/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import typeUtil from '@tsdotnet/type';
import areEqual from './areEqual';
export default function areEquivalentObjects(a, b, nullEquivalency = true, extraDepth = 0) {
    if (areEqual(a, b))
        return true;
    const aKeys = typeUtil.isObject(a) && Object.keys(a), bKeys = typeUtil.isObject(b) && Object.keys(b);
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
            if (key !== bKeys[i])
                return false;
        }
        if (extraDepth > 0) {
            for (const key of aKeys) {
                if (!areEquivalentObjects(a[key], b[key], nullEquivalency, extraDepth - 1))
                    return false;
            }
        }
        else {
            for (const key of aKeys) {
                if (!areEqual(a[key], b[key]))
                    return false;
            }
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=areEquivalentObjects.js.map