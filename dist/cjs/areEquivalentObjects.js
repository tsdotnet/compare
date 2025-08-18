"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = areEquivalentObjects;
const tslib_1 = require("tslib");
const type_1 = tslib_1.__importDefault(require("@tsdotnet/type"));
const areEqual_1 = tslib_1.__importDefault(require("./areEqual"));
function areEquivalentObjects(a, b, nullEquivalency = true, extraDepth = 0) {
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
            if (key !== bKeys[i])
                return false;
        }
        if (extraDepth > 0) {
            for (const key of aKeys) {
                if (!areEquivalentObjects(a[key], b[key], nullEquivalency, extraDepth - 1))
                    return false;
            }
        }
        else {
            for (const key of aKeys) {
                if (!(0, areEqual_1.default)(a[key], b[key]))
                    return false;
            }
        }
        return true;
    }
    return false;
}
//# sourceMappingURL=areEquivalentObjects.js.map