/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * A class for helping in complex sorting patterns.
 */
export default class SortContext {
    /**
     * Constructs a SortContext.
     * @param {Comparer | null} _next If provided (not null) any items that are considered equal will use this comparer to decided their order.
     * @param {Comparison} _comparer The comparison function that will differentiate between items.
     * @param {Order} _order Ascending or Descending.
     */
    constructor(_next, _comparer, _order = 1 /* Ascending */) {
        this._next = _next;
        this._comparer = _comparer;
        this._order = _order;
    }
    /**
     * Direction of the comparison.
     * @type {Order}
     */
    get order() {
        return this._order;
    }
    /**
     * A scope safe comparison function (delegate).
     * @return {Comparison}
     */
    get comparison() {
        if (this._comparison)
            return this._comparison;
        const c = (a, b) => this.compare(a, b);
        this._comparison = c;
        return c;
    }
    /**
     * Generates an array of indexes from the source in order of their expected internalSort without modifying the source.
     * @param source
     * @returns {number[]}
     */
    generateSortedIndexes(source) {
        if (source == null)
            return [];
        const result = source.map((s, i) => i);
        result.sort((a, b) => this.compare(source[a], source[b]));
        return result;
    }
    /**
     * Compares two values based upon SortContext parameters.
     * @param a
     * @param b
     * @returns {any}
     */
    compare(a, b) {
        const d = this._comparer(a, b);
        if (d === 0 && this._next)
            return this._next.compare(a, b);
        return this._order * d;
    }
}
//# sourceMappingURL=SortContext.js.map