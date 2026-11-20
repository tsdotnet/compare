/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Sorting order. One type everywhere: the public API takes this enum or its numeric values (OrderOrValue).
 * @enum {number}
 */
enum Order
{
	Ascending  = +1,
	Descending = -1,
}

/**
 * The Order enum or its raw numeric values.
 */
export type OrderOrValue = Order | 1 | -1;

export default Order;
