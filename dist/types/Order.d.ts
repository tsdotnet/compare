/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
declare enum Order {
    Ascending = 1,
    Descending = -1
}
export type OrderOrValue = Order | 1 | -1;
export default Order;
