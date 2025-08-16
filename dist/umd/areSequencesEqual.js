/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./index"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = areSequencesEqual;
    const index_1 = require("./index");
    /**
     * Compares two sequences for equality.
     * @param {Iterable} a
     * @param {Iterable} b
     * @param {EqualityComparison} equalityComparer
     * @return {boolean}
     */
    function areSequencesEqual(a, b, equalityComparer = index_1.areEqual) {
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
});
//# sourceMappingURL=areSequencesEqual.js.map