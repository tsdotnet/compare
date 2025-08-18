/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

export const enum OrderValue
{
	Ascending  = +1,
	Descending = -1,
}

/**
 * Enum representation of sorting order.
 */
enum Order
{
	Ascending  = OrderValue.Ascending,
	Descending = OrderValue.Descending,
}

export type OrderOrValue = Order | OrderValue | 1 | -1;

export default Order;
