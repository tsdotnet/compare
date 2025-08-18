import { describe, it, expect } from 'vitest';
import Order from '../src/Order.js';
import CompareResult from '../src/CompareResult.js';
import SortContext from '../src/SortContext.js';

describe('Public Enum Usage and Value Compatibility', () => {
	describe('Order enum public usage', () => {
		it('should have correct values', () => {
			// Verify the public enum has the expected numeric values
			expect(Order.Ascending).toBe(1);
			expect(Order.Descending).toBe(-1);
			
			// These are the values consumers will use
			expect(typeof Order.Ascending).toBe('number');
			expect(typeof Order.Descending).toBe('number');
		});

		it('should work with SortContext constructor via value compatibility', () => {
			// SortContext expects OrderValue internally, but Order values should work
			// because they have the same numeric values
			const comparison = (a: number, b: number) => a - b;
			
			// Test with explicit value casting (this is what consumers would do)
			const context1 = new SortContext(null, comparison, Order.Ascending as any);
			expect(context1.order).toBe(1); // Should be the same value
			
			const context2 = new SortContext(null, comparison, Order.Descending as any);
			expect(context2.order).toBe(-1); // Should be the same value
		});

		it('should support comparisons based on values', () => {
			// Even though types are different, values should be equivalent
			expect(Order.Ascending === 1).toBe(true);
			expect(Order.Descending === -1).toBe(true);
			
			// This is how consumers can check values
			function isAscending(order: number): boolean {
				return order === Order.Ascending;
			}
			
			expect(isAscending(Order.Ascending)).toBe(true);
			expect(isAscending(Order.Descending)).toBe(false);
			expect(isAscending(1)).toBe(true);
			expect(isAscending(-1)).toBe(false);
		});

		it('should work in practical sorting scenarios', () => {
			const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
			
			// Consumer code using public Order enum
			function createNumberSorter(order: Order) {
				// Internally this requires a cast, but the values are compatible
				return new SortContext(
					null, 
					(a: number, b: number) => a - b,
					order as any // Value compatibility workaround
				);
			}
			
			const ascendingSort = createNumberSorter(Order.Ascending);
			const descendingSort = createNumberSorter(Order.Descending);
			
			const ascIndexes = ascendingSort.generateSortedIndexes(numbers);
			const descIndexes = descendingSort.generateSortedIndexes(numbers);
			
			const ascSorted = ascIndexes.map(i => numbers[i]);
			const descSorted = descIndexes.map(i => numbers[i]);
			
			expect(ascSorted).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
			expect(descSorted).toEqual([9, 6, 5, 4, 3, 2, 1, 1]);
		});
	});

	describe('CompareResult enum public usage', () => {
		it('should have correct values', () => {
			expect(CompareResult.Equal).toBe(0);
			expect(CompareResult.Greater).toBe(1);
			expect(CompareResult.Less).toBe(-1);
		});

		it('should work in consumer comparison functions', () => {
			// Consumer function that returns CompareResult
			function compareStrings(a: string, b: string): CompareResult {
				if (a === b) return CompareResult.Equal;
				if (a > b) return CompareResult.Greater;
				return CompareResult.Less;
			}
			
			expect(compareStrings('apple', 'banana')).toBe(CompareResult.Less);
			expect(compareStrings('banana', 'apple')).toBe(CompareResult.Greater);
			expect(compareStrings('apple', 'apple')).toBe(CompareResult.Equal);
			
			// Values should match expected numbers
			expect(compareStrings('apple', 'banana')).toBe(-1);
			expect(compareStrings('banana', 'apple')).toBe(1);
			expect(compareStrings('apple', 'apple')).toBe(0);
		});

		it('should work with switch statements', () => {
			function describeComparison(result: CompareResult): string {
				switch (result) {
					case CompareResult.Equal:
						return 'items are equal';
					case CompareResult.Greater:
						return 'first item is greater';
					case CompareResult.Less:
						return 'first item is less';
					default:
						return 'unknown comparison';
				}
			}
			
			expect(describeComparison(CompareResult.Equal)).toBe('items are equal');
			expect(describeComparison(CompareResult.Greater)).toBe('first item is greater');
			expect(describeComparison(CompareResult.Less)).toBe('first item is less');
			
			// Should also work with numeric values
			expect(describeComparison(0 as CompareResult)).toBe('items are equal');
			expect(describeComparison(1 as CompareResult)).toBe('first item is greater');
			expect(describeComparison(-1 as CompareResult)).toBe('first item is less');
		});
	});

	describe('Value compatibility verification', () => {
		it('should demonstrate that enum values are just numbers', () => {
			// The key insight: enums are just numbers with names
			const ascendingValue: number = Order.Ascending;
			const equalValue: number = CompareResult.Equal;
			
			expect(ascendingValue).toBe(1);
			expect(equalValue).toBe(0);
			
			// Can be used in arithmetic
			expect(ascendingValue * Order.Descending).toBe(-1);
			expect(equalValue + CompareResult.Greater).toBe(1);
		});

		it('should show how consumers can work around type restrictions', () => {
			// If consumers need to pass Order to functions expecting OrderValue,
			// they can use value-based approaches
			
			function createSortContextFromOrder(order: Order) {
				const comparison = (a: string, b: string) => a.localeCompare(b);
				
				// Method 1: Direct cast (acknowledges the value compatibility)
				const context1 = new SortContext(null, comparison, order as any);
				
				// Method 2: Convert to number and back
				const orderValue = order === Order.Ascending ? 1 : -1;
				const context2 = new SortContext(null, comparison, orderValue as any);
				
				// Both should work identically
				expect(context1.order).toBe(context2.order);
				expect(context1.order).toBe(order);
				
				return context1;
			}
			
			const ascContext = createSortContextFromOrder(Order.Ascending);
			const descContext = createSortContextFromOrder(Order.Descending);
			
			expect(ascContext.order).toBe(1);
			expect(descContext.order).toBe(-1);
		});

		it('should verify internal consistency', () => {
			// The pattern works because the values are identical
			// Even though types are strict, runtime behavior is consistent
			
			const items = ['zebra', 'apple', 'banana', 'cherry'];
			const sorter = new SortContext(
				null,
				(a: string, b: string) => a.localeCompare(b),
				Order.Ascending as any
			);
			
			const sortedIndexes = sorter.generateSortedIndexes(items);
			const sortedItems = sortedIndexes.map(i => items[i]);
			
			expect(sortedItems).toEqual(['apple', 'banana', 'cherry', 'zebra']);
			
			// The order property should reflect the Order enum value
			expect(sorter.order).toBe(Order.Ascending);
			expect(sorter.order).toBe(1);
		});
	});

	describe('Best practices for consumers', () => {
		it('should demonstrate recommended usage patterns', () => {
			// Recommended: Use the public enums for all consumer-facing code
			
			// 1. Function parameters should use public enum types
			function createStringSorter(order: Order, caseSensitive: boolean = true) {
				const comparison = caseSensitive 
					? (a: string, b: string) => a.localeCompare(b)
					: (a: string, b: string) => a.toLowerCase().localeCompare(b.toLowerCase());
				
				return new SortContext(null, comparison, order as any);
			}
			
			// 2. Return values should use public enum types  
			function analyzeOrder(sorter: SortContext<any>): Order {
				return sorter.order === 1 ? Order.Ascending : Order.Descending;
			}
			
			// 3. Usage should be intuitive
			const ascSorter = createStringSorter(Order.Ascending);
			const descSorter = createStringSorter(Order.Descending, false);
			
			expect(analyzeOrder(ascSorter)).toBe(Order.Ascending);
			expect(analyzeOrder(descSorter)).toBe(Order.Descending);
			
			// 4. Comparisons should work naturally
			expect(ascSorter.order === Order.Ascending).toBe(true);
			expect(descSorter.order === Order.Descending).toBe(true);
		});

		it('should handle edge cases gracefully', () => {
			// Edge case: Raw numeric values
			const rawAscending = 1;
			const rawDescending = -1;
			
			// These should be equivalent to enum values
			expect(rawAscending === Order.Ascending).toBe(true);
			expect(rawDescending === Order.Descending).toBe(true);
			
			// Can be used interchangeably in contexts that accept numbers
			function describeDirection(direction: number): string {
				if (direction === Order.Ascending) return 'ascending';
				if (direction === Order.Descending) return 'descending';
				return 'neutral';
			}
			
			expect(describeDirection(Order.Ascending)).toBe('ascending');
			expect(describeDirection(rawAscending)).toBe('ascending');
			expect(describeDirection(Order.Descending)).toBe('descending');
			expect(describeDirection(rawDescending)).toBe('descending');
			expect(describeDirection(0)).toBe('neutral');
		});
	});
});
