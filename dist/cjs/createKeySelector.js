"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createKeySelector;
function createKeySelector(...keys) {
    return function* (e) {
        for (const k of keys) {
            yield e[k];
        }
    };
}
//# sourceMappingURL=createKeySelector.js.map