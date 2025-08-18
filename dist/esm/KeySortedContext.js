import compare from './compare.js';
import SortContext from './SortContext.js';

/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
class KeySortedContext extends SortContext {
    _keySelector;
    constructor(next, keySelector, order = 1, comparer = compare) {
        super(next, comparer, order);
        this._keySelector = keySelector;
    }
    compare(a, b) {
        const ks = this._keySelector;
        if (!ks)
            return super.compare(a, b);
        const d = compare(ks(a), ks(b));
        if (d === 0 && this._next)
            return this._next.compare(a, b);
        return this._order * d;
    }
}

export { KeySortedContext as default };
//# sourceMappingURL=KeySortedContext.js.map
