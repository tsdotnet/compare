/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */


export const enum CompareResultValue
{
	Equal   = 0,
	Greater = 1,
	Less    = -1,
}

// Typically this won't be used by consumers, but it is exported for completeness.
/**
 * Represents the result of a comparison operation.
 * @enum {number}
 */
enum CompareResult
{
	Equal   = CompareResultValue.Equal,
	Greater = CompareResultValue.Greater,
	Less    = CompareResultValue.Less,
}

/**
 * Union type that accepts both CompareResultValue and CompareResult for maximum flexibility.
 * This allows internal functions to accept either the const enum (for performance)
 * or the regular enum (for public API usage).
 */
export type CompareResultOrValue = CompareResultValue | CompareResult | 0 | 1 | -1;

export default CompareResult;
