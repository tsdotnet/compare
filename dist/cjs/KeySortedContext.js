"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const compare_1 = tslib_1.__importDefault(require("./compare"));
const SortContext_1 = tslib_1.__importDefault(require("./SortContext"));
class KeySortedContext extends SortContext_1.default {
    constructor(next, keySelector, order = 1, comparer = compare_1.default) {
        super(next, comparer, order);
        this._keySelector = keySelector;
    }
    compare(a, b) {
        const ks = this._keySelector;
        if (!ks)
            return super.compare(a, b);
        const d = (0, compare_1.default)(ks(a), ks(b));
        if (d === 0 && this._next)
            return this._next.compare(a, b);
        return this._order * d;
    }
}
exports.default = KeySortedContext;
//# sourceMappingURL=KeySortedContext.js.map