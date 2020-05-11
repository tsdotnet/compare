"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = createKeySelector;
//# sourceMappingURL=createKeySelector.js.map