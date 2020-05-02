/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { compare } from './compare';
import SortContext from './SortContext';
function identity(e) { return e; }
export default class KeySortedContext extends SortContext {
    constructor(next, _keySelector, order = 1 /* Ascending */, comparer = compare) {
        super(next, comparer, order);
        this._keySelector = _keySelector;
    }
    compare(a, b) {
        const ks = this._keySelector;
        if (!ks || ks === identity)
            return super.compare(a, b);
        // We force <any> here since it can be a primitive or Comparable<any>
        const d = compare(ks(a), ks(b));
        if (d === 0 && this._next)
            return this._next.compare(a, b);
        return this._order * d;
    }
}
//# sourceMappingURL=KeySortedContext.js.map