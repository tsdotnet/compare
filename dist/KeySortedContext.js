"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * @packageDocumentation
 * @module compare
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const compare_1 = tslib_1.__importDefault(require("./compare"));
const SortContext_1 = tslib_1.__importDefault(require("./SortContext"));
/**
 * A class for helping in complex sorting patterns using a key selector.
 */
class KeySortedContext extends SortContext_1.default {
    /**
     * Constructs a KeySortedContext.
     * @param {Comparer | null} next If provided (not null) any items that are considered equal will use this comparer to decided their order.
     * @param {Selector | null} keySelector If provided (not null) will use the selected keys to order the results.
     * @param {Order} order Ascending or Descending.
     * @param {Comparison} comparer The comparison function.  The default handles most cases.
     */
    constructor(next, keySelector, order = 1 /* Ascending */, comparer = compare_1.default) {
        super(next, comparer, order);
        this._keySelector = keySelector;
    }
    compare(a, b) {
        const ks = this._keySelector;
        if (!ks)
            return super.compare(a, b);
        // We force <any> here since it can be a primitive or Comparable<any>
        const d = compare_1.default(ks(a), ks(b));
        if (d === 0 && this._next)
            return this._next.compare(a, b);
        return this._order * d;
    }
}
exports.default = KeySortedContext;
//# sourceMappingURL=KeySortedContext.js.map