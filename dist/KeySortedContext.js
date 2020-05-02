"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const compare_1 = require("./compare");
const SortContext_1 = tslib_1.__importDefault(require("./SortContext"));
function identity(e) { return e; }
class KeySortedContext extends SortContext_1.default {
    constructor(next, _keySelector, order = 1 /* Ascending */, comparer = compare_1.compare) {
        super(next, comparer, order);
        this._keySelector = _keySelector;
    }
    compare(a, b) {
        const ks = this._keySelector;
        if (!ks || ks === identity)
            return super.compare(a, b);
        // We force <any> here since it can be a primitive or Comparable<any>
        const d = compare_1.compare(ks(a), ks(b));
        if (d === 0 && this._next)
            return this._next.compare(a, b);
        return this._order * d;
    }
}
exports.default = KeySortedContext;
//# sourceMappingURL=KeySortedContext.js.map