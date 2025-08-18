/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
export default function createKeySelector(...keys) {
    return function* (e) {
        for (const k of keys) {
            yield e[k];
        }
    };
}
//# sourceMappingURL=createKeySelector.js.map