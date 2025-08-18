/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
export declare const enum OrderValue {
    Ascending = 1,
    Descending = -1
}
declare enum Order {
    Ascending = 1,
    Descending = -1
}
export type OrderOrValue = Order | OrderValue | 1 | -1;
export default Order;
