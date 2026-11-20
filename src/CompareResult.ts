/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

/**
 * Result of a comparison. One type everywhere: compare() and comparison functions return this enum.
 * @enum {number}
 */
enum CompareResult
{
	Equal   = 0,
	Greater = 1,
	Less    = -1,
}

/**
 * The CompareResult enum or its raw numeric values.
 */
export type CompareResultOrValue = CompareResult | 0 | 1 | -1;

export default CompareResult;
