(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@tsdotnet/type')) :
    typeof define === 'function' && define.amd ? define(['exports', '@tsdotnet/type'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.tsdotnet = global.tsdotnet || {}, global.tsdotnet.compare = global.tsdotnet.compare || {}), global.tsdotnet.type));
})(this, (function (exports, typeUtil) { 'use strict';

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    var isTrueNaN$1 = typeUtil.isTrueNaN;
    function areEqual(a, b) {
        return a === b || (isTrueNaN$1(a) && isTrueNaN$1(b));
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    var isTrueNaN = typeUtil.isTrueNaN;
    function areEquivalent(a, b) {
        return a == b || (isTrueNaN(a) && isTrueNaN(b));
    }

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

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    function comparePrimitives(a, b) {
        if (areEqual(a, b))
            return 0;
        if (a > b || a === 0 && b == 0 || a === null && b === undefined)
            return 1;
        if (b > a || b === 0 && a == 0 || b === null && a === undefined)
            return -1;
        return NaN;
    }
    (function (comparePrimitives) {
        function inverted(a, b) {
            return -comparePrimitives(a, b);
        }
        comparePrimitives.inverted = inverted;
    })(comparePrimitives || (comparePrimitives = {}));
    var comparePrimitives$1 = comparePrimitives;

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    function fromSelector(selector, order = 1) {
        if (order !== -1)
            order = 1;
        return function (a, b) {
            return comparePrimitives$1(selector(a), selector(b)) * order;
        };
    }
    function fromKey(key, order = 1) {
        if (order !== -1)
            order = 1;
        return function (a, b) {
            return comparePrimitives$1(a[key], b[key]) * order;
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

    var comparison = /*#__PURE__*/Object.freeze({
        __proto__: null,
        from: from,
        fromKey: fromKey,
        fromKeys: fromKeys,
        fromSelector: fromSelector,
        invert: invert,
        join: join
    });

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    const COMPARE_TO = 'compareTo';
    function compare(a, b) {
        if (a && typeUtil.hasMember(a, COMPARE_TO))
            return a.compareTo(b);
        else if (b && typeUtil.hasMember(b, COMPARE_TO))
            return -b.compareTo(a);
        return comparePrimitives$1(a, b);
    }
    (function (compare) {
        function compareInverted(a, b) {
            return -compare(a, b);
        }
        compare.compareInverted = compareInverted;
        compare.primitives = comparePrimitives$1;
    })(compare || (compare = {}));
    var compare$1 = compare;

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    var CompareResult;
    (function (CompareResult) {
        CompareResult[CompareResult["Equal"] = 0] = "Equal";
        CompareResult[CompareResult["Greater"] = 1] = "Greater";
        CompareResult[CompareResult["Less"] = -1] = "Less";
    })(CompareResult || (CompareResult = {}));
    var CompareResult_default = CompareResult;

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    class SortContext {
        _next;
        _comparer;
        _order;
        constructor(_next, _comparer, _order = 1) {
            this._next = _next;
            this._comparer = _comparer;
            this._order = _order;
        }
        get order() {
            return this._order;
        }
        _comparison;
        get comparison() {
            if (this._comparison)
                return this._comparison;
            const c = (a, b) => this.compare(a, b);
            this._comparison = c;
            return c;
        }
        generateSortedIndexes(source) {
            if (source == null)
                return [];
            const result = source.map((s, i) => i);
            result.sort((a, b) => {
                const valueA = source[a];
                const valueB = source[b];
                if (valueA === undefined && valueB === undefined)
                    return 0;
                if (valueA === undefined)
                    return -1;
                if (valueB === undefined)
                    return 1;
                return this.compare(valueA, valueB);
            });
            return result;
        }
        compare(a, b) {
            const d = this._comparer(a, b);
            if (d === 0 && this._next)
                return this._next.compare(a, b);
            return this._order * d;
        }
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    class KeySortedContext extends SortContext {
        _keySelector;
        constructor(next, keySelector, order = 1, comparer = compare$1) {
            super(next, comparer, order);
            this._keySelector = keySelector;
        }
        compare(a, b) {
            const ks = this._keySelector;
            if (!ks)
                return super.compare(a, b);
            const d = compare$1(ks(a), ks(b));
            if (d === 0 && this._next)
                return this._next.compare(a, b);
            return this._order * d;
        }
    }

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    var Order;
    (function (Order) {
        Order[Order["Ascending"] = 1] = "Ascending";
        Order[Order["Descending"] = -1] = "Descending";
    })(Order || (Order = {}));
    var Order_default = Order;

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    var EqualityOperator;
    (function (EqualityOperator) {
        EqualityOperator[EqualityOperator["Equality"] = 0] = "Equality";
        EqualityOperator[EqualityOperator["Identity"] = 1] = "Identity";
    })(EqualityOperator || (EqualityOperator = {}));
    var EqualityOperator_default = EqualityOperator;

    exports.type = typeUtil;
    exports.CompareResult = CompareResult_default;
    exports.EqualityOperator = EqualityOperator_default;
    exports.KeySortedContext = KeySortedContext;
    exports.Order = Order_default;
    exports.SortContext = SortContext;
    exports.areEqual = areEqual;
    exports.areEquivalent = areEquivalent;
    exports.areEquivalentObjects = areEquivalent;
    exports.areSequencesEqual = areSequencesEqual;
    exports.compare = compare$1;
    exports.comparison = comparison;

}));
//# sourceMappingURL=compare.js.map
