/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import compare from './compare';
import SortContext from './SortContext';
/**
 * A class for helping in complex sorting patterns using a key selector.
 */
export default class KeySortedContext extends SortContext {
    /**
     * Constructs a KeySortedContext.
     * @param {Comparer | null} next If provided (not null) any items that are considered equal will use this comparer to decided their order.
     * @param {Selector | null} keySelector If provided (not null) will use the selected keys to order the results.
     * @param {Order} order Ascending or Descending.
     * @param {Comparison} comparer The comparison function.  The default handles most cases.
     */
    constructor(next, keySelector, order = 1 /* Ascending */, comparer = compare) {
        super(next, comparer, order);
        this._keySelector = keySelector;
    }
    compare(a, b) {
        const ks = this._keySelector;
        if (!ks)
            return super.compare(a, b);
        // We force <any> here since it can be a primitive or Comparable<any>
        const d = compare(ks(a), ks(b));
        if (d === 0 && this._next)
            return this._next.compare(a, b);
        return this._order * d;
    }
}
//# sourceMappingURL=KeySortedContext.js.map