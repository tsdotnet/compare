"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
class SortContext {
    constructor(_next, _comparer, _order = 1) {
        this._next = _next;
        this._comparer = _comparer;
        this._order = _order;
    }
    get order() {
        return this._order;
    }
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
exports.default = SortContext;
//# sourceMappingURL=SortContext.js.map