/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Const enum for order values providing compile-time optimization.
 * Used internally for performance-critical operations.
 * @readonly
 * @enum {number}
 */
export const enum OrderValue
{
	Ascending  = +1,
	Descending = -1,
}

/**
 * Enum representation of sorting order.
 * @enum {number}
 */
enum Order
{
	Ascending  = OrderValue.Ascending,
	Descending = OrderValue.Descending,
}

/**
 * Union type that accepts OrderValue, Order enum, or numeric literals for maximum flexibility.
 * This allows functions to accept either the const enum (for performance),
 * the regular enum (for public API usage), or raw numeric values.
 */
export type OrderOrValue = Order | OrderValue | 1 | -1;

export default Order;
