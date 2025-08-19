import comparePrimitives from './comparePrimitives.js';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
function fromSelector(selector, order = 1) {
    if (order !== -1)
        order = 1;
    return function (a, b) {
        return comparePrimitives(selector(a), selector(b)) * order;
    };
}
function fromKey(key, order = 1) {
    if (order !== -1)
        order = 1;
    return function (a, b) {
        return comparePrimitives(a[key], b[key]) * order;
    };
}
function fromKeys(keys) {
    return keys instanceof Array
        ? join(keys.map(k => fromKey(k)))
        : join(Object.keys(keys).map(k => fromKey(k, keys[k])));
}
function join(comparisons) {
    return function (a, b) {
        for (const c of comparisons) {
            const o = c(a, b);
            if (o !== 0)
                return o;
        }
        return 0;
    };
}
function from(orderBy) {
    if (typeof orderBy === 'string')
        return fromKey(orderBy);
    if (orderBy instanceof Array)
        return join(orderBy.map(from));
    if ('key' in orderBy)
        return fromKey(orderBy.key, orderBy.order);
    if ('selector' in orderBy)
        return fromSelector(orderBy.selector, orderBy.order);
    if ('comparison' in orderBy) {
        return orderBy.order === -1
            ? invert(orderBy.comparison)
            : orderBy.comparison;
    }
    if (typeof orderBy === 'function') {
        if (orderBy.length > 1)
            return orderBy;
        if (orderBy.length == 1)
            return fromSelector(orderBy);
    }
    throw new TypeError('Unknown order-by to comparison evaluator.');
}
function invert(comparison) {
    return function (a, b) {
        return comparison(a, b) * -1;
    };
}

export { from, fromKey, fromKeys, fromSelector, invert, join };
//# sourceMappingURL=comparison.js.map
