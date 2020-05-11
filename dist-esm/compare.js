/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type from './type';
import { comparePrimitives } from './comparePrimitives';
const COMPARE_TO = 'compareTo';
export function compare(a, b, strict = true) {
    if (a && type.hasMember(a, COMPARE_TO))
        return a.compareTo(b);
    // If a has compareTo, use it.
    else if (b && type.hasMember(b, COMPARE_TO))
        return -b.compareTo(a); // a doesn't have compareTo? check if b does and invert.
    return comparePrimitives(a, b, strict);
}
export function compareInverted(a, b, strict = true) {
    return compare(a, b, strict) * -1;
}
//# sourceMappingURL=compare.js.map