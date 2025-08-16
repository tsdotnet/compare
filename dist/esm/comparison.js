/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import comparePrimitives from './comparePrimitives';
var comparison;
(function (comparison_1) {
    /**
     * Creates a comparison function from selector.
     * @param {Selector<T, Primitive>} selector
     * @param {Order} order
     * @return {Comparison<T>}
     */
    function fromSelector(selector, order = 1 /* Order.Ascending */) {
        if (order !== -1)
            order = 1;
        return function (a, b) {
            return comparePrimitives(selector(a), selector(b)) * order;
        };
    }
    comparison_1.fromSelector = fromSelector;
    /**
     * Creates a comparison function from a key of an object.
     * @param {keyof T} key
     * @param {Order} order
     * @return {Comparison<T>}
     */
    function fromKey(key, order = 1 /* Order.Ascending */) {
        if (order !== -1)
            order = 1;
        return function (a, b) {
            return comparePrimitives(a[key], b[key]) * order;
        };
    }
    comparison_1.fromKey = fromKey;
    function fromKeys(keys) {
        return keys instanceof Array
            ? join(keys.map(k => fromKey(k)))
            : join(Object.keys(keys).map(k => fromKey(k, keys[k])));
    }
    comparison_1.fromKeys = fromKeys;
    /**
     * Joins comparison functions into one by evaluating equality in comparison order.
     * @param {Iterable<Comparison<T>>} comparisons
     * @return {Comparison<T>}
     */
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
    comparison_1.join = join;
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
    comparison_1.from = from;
    /**
     * Inverts a comparison function's order.
     * @param {Comparison<T>} comparison
     * @return {Comparison<T>}
     */
    function invert(comparison) {
        return function (a, b) {
            return comparison(a, b) * -1;
        };
    }
    comparison_1.invert = invert;
})(comparison || (comparison = {}));
export default comparison;
//# sourceMappingURL=comparison.js.map