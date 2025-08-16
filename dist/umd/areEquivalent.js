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
        define(["require", "exports", "tslib", "@tsdotnet/type"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = areEquivalent;
    const tslib_1 = require("tslib");
    const type_1 = tslib_1.__importDefault(require("@tsdotnet/type"));
    var isTrueNaN = type_1.default.isTrueNaN;
    /**
     * Used for special equality (==) comparison including NaN.
     * @param a
     * @param b
     * @returns {boolean|any}
     */
    function areEquivalent(a, b) {
        return a == b || (isTrueNaN(a) && isTrueNaN(b));
    }
});
//# sourceMappingURL=areEquivalent.js.map