"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
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
//# sourceMappingURL=createKeySelector.js.map