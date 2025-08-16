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
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = createKeySelector;
    /**
     * Creates a selector that iterates the keys in order provided.
     * @param keys The keys desired.
     * @return The selector function.
     */
    function createKeySelector(...keys) {
        return function* (e) {
            for (const k of keys) {
                yield e[k];
            }
        };
    }
});
//# sourceMappingURL=createKeySelector.js.map