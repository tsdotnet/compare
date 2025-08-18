/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
export declare const enum CompareResultValue {
    Equal = 0,
    Greater = 1,
    Less = -1
}
declare enum CompareResult {
    Equal = 0,
    Greater = 1,
    Less = -1
}
export type CompareResultOrValue = CompareResultValue | CompareResult | 0 | 1 | -1;
export default CompareResult;
