/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import areEqual from './areEqual';
/**
 * Compares two comparable objects or primitives.
 * @param a
 * @param b
 * @param strict If true (default) will ensure strict identity (===).  False will allow equality (==).
 */
export function comparePrimitives(a, b, strict = true) {
    if (areEqual(a, b, strict))
        return 0 /* Equal */;
    // Allow for special inequality..
    if (a > b || (strict && ((a === 0 && b == 0) || (a === null && b === undefined))))
        return 1 /* Greater */;
    if (b > a || (strict && ((b === 0 && a == 0) || (b === null && a === undefined))))
        return -1 /* Less */;
    return NaN;
}
/**
 * Compares two comparable objects or primitives and inverts the sign of the result.
 * @param a
 * @param b
 * @param strict If true (default) will ensure strict identity (===).  False will allow equality (==).
 */
export function comparePrimitivesInverted(a, b, strict = true) {
    return comparePrimitives(a, b, strict) * -1;
}
//# sourceMappingURL=comparePrimitives.js.map