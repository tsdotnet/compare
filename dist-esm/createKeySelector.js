/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * Creates a selector that iterates the keys in order provided.
 * @param keys The keys desired.
 * @return The selector function.
 */
export default function createKeySelector(...keys) {
    return function* (e) {
        for (const k of keys) {
            yield e[k];
        }
    };
}
//# sourceMappingURL=createKeySelector.js.map