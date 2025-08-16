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
        define(["require", "exports", "tslib", "@tsdotnet/type", "./areEqual"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = areEquivalentObjects;
    const tslib_1 = require("tslib");
    const type_1 = tslib_1.__importDefault(require("@tsdotnet/type"));
    const areEqual_1 = tslib_1.__importDefault(require("./areEqual"));
    /**
     * Determines if two primitives are equal or if two objects have the same key/value combinations.
     * @param a
     * @param b
     * @param nullEquivalency If true, null/undefined will be equivalent to an empty object {}.
     * @param extraDepth
     * @returns {boolean}
     */
    function areEquivalentObjects(a, b, nullEquivalency = true, extraDepth = 0) {
        // Take a step by step approach to ensure efficiency.
        if ((0, areEqual_1.default)(a, b))
            return true;
        const aKeys = type_1.default.isObject(a) && Object.keys(a), bKeys = type_1.default.isObject(b) && Object.keys(b);
        if (a == null || b == null) {
            if (!nullEquivalency)
                return false;
            if (aKeys)
                return !aKeys.length;
            if (bKeys)
                return !bKeys.length;
            return a == null && b == null;
        }
        if (aKeys && bKeys) {
            const len = aKeys.length;
            if (len !== bKeys.length)
                return false;
            aKeys.sort();
            bKeys.sort();
            for (let i = 0; i < len; i++) {
                const key = aKeys[i];
                if (key !== bKeys[i] || !(0, areEqual_1.default)(a[key], a[key]))
                    return false;
            }
            // Doesn't track circular references but allows for controlling the amount of recursion.
            if (extraDepth > 0) {
                for (const key of aKeys) {
                    if (!areEquivalentObjects(a[key], a[key], nullEquivalency, extraDepth - 1))
                        return false;
                }
            }
            return true;
        }
        return false;
    }
});
//# sourceMappingURL=areEquivalentObjects.js.map