import { describe, it, expect } from 'vitest';
import * as comparison from '../src/comparison';
import { OrderValue } from '../src/Order';

interface TestItem {
	a: number;
	b: number;
	name: string;
}

describe('comparison extended tests', () => {
	describe('.join()', () => {
		it('should join multiple comparison functions', () => {
			const items: TestItem[] = [
				{ a: 1, b: 2, name: 'second' },
				{ a: 1, b: 1, name: 'first' },
				{ a: 2, b: 1, name: 'third' }
			];

			const joinedComp = comparison.join([
				comparison.fromKey<TestItem>('a'),
				comparison.fromKey<TestItem>('b')
			]);

			items.sort(joinedComp);
			expect(items[0]?.name).toBe('first');  // a:1, b:1
			expect(items[1]?.name).toBe('second'); // a:1, b:2
			expect(items[2]?.name).toBe('third');  // a:2, b:1
		});

		it('should return 0 when all comparisons are equal', () => {
			const item1: TestItem = { a: 1, b: 1, name: 'same' };
			const item2: TestItem = { a: 1, b: 1, name: 'same' };

			const joinedComp = comparison.join([
				comparison.fromKey<TestItem>('a'),
				comparison.fromKey<TestItem>('b')
			]);

			expect(joinedComp(item1, item2)).toBe(0);
		});
	});

	describe('.from() comprehensive', () => {
		it('should handle string key input', () => {
			const comp = comparison.from('name' as any);
			const item1 = { name: 'Alice' };
			const item2 = { name: 'Bob' };
			expect(comp(item1, item2)).toBeLessThan(0);
		});

		it('should handle array of order-by objects', () => {
			const comp = comparison.from([
				{ key: 'a' },
				{ key: 'b' }
			] as any);
			expect(typeof comp).toBe('function');
		});

		it('should handle key-based order-by with order', () => {
			const comp = comparison.from({ 
				key: 'a', 
				order: OrderValue.Descending 
			} as any);
			const item1 = { a: 1 };
			const item2 = { a: 2 };
			expect(comp(item1, item2)).toBeGreaterThan(0); // Descending
		});

		it('should handle selector-based order-by', () => {
			const comp = comparison.from({ 
				selector: (item: any) => item.value,
				order: OrderValue.Ascending 
			} as any);
			const item1 = { value: 2 };
			const item2 = { value: 1 };
			expect(comp(item1, item2)).toBeGreaterThan(0);
		});

		it('should handle comparison-based order-by ascending', () => {
			const customComp = (a: any, b: any) => a.value - b.value;
			const comp = comparison.from({ 
				comparison: customComp,
				order: OrderValue.Ascending 
			} as any);
			const item1 = { value: 1 };
			const item2 = { value: 2 };
			expect(comp(item1, item2)).toBe(-1);
		});

		it('should handle comparison-based order-by descending', () => {
			const customComp = (a: any, b: any) => a.value - b.value;
			const comp = comparison.from({ 
				comparison: customComp,
				order: OrderValue.Descending 
			} as any);
			const item1 = { value: 1 };
			const item2 = { value: 2 };
			expect(comp(item1, item2)).toBe(1); // Inverted
		});

		it('should handle function with multiple parameters', () => {
			const multiParamFunc = (a: any, b: any) => a.value - b.value;
			const comp = comparison.from(multiParamFunc as any);
			expect(comp).toBe(multiParamFunc);
		});

		it('should handle single parameter function as selector', () => {
			const selectorFunc = (item: any) => item.value;
			const comp = comparison.from(selectorFunc as any);
			expect(typeof comp).toBe('function');
			
			const item1 = { value: 2 };
			const item2 = { value: 1 };
			expect(comp(item1, item2)).toBeGreaterThan(0);
		});

		it('should throw for unknown order-by type', () => {
			expect(() => {
				comparison.from({ unknown: true } as any);
			}).toThrow('Unknown order-by to comparison evaluator.');
		});
	});

	describe('.invert()', () => {
		it('should invert comparison function results', () => {
			const originalComp = (a: { value: number }, b: { value: number }) => a.value - b.value;
			const invertedComp = comparison.invert(originalComp);

			const item1 = { value: 1 };
			const item2 = { value: 2 };

			expect(originalComp(item1, item2)).toBe(-1);
			expect(invertedComp(item1, item2)).toBe(1);
		});

		it('should handle zero results', () => {
			const originalComp = () => 0;
			const invertedComp = comparison.invert(originalComp);
			expect(invertedComp({} as any, {} as any)).toBe(-0);
		});
	});

	describe('.fromSelector() edge cases', () => {
		it('should normalize non-standard order values', () => {
			const comp1 = comparison.fromSelector((item: any) => item.value, 5 as any);
			const comp2 = comparison.fromSelector((item: any) => item.value, 1);
			
			const item1 = { value: 1 };
			const item2 = { value: 2 };
			
			// Both should behave the same (normalized to 1)
			expect(comp1(item1, item2)).toBe(comp2(item1, item2));
		});
	});

	describe('.fromKey() edge cases', () => {
		it('should normalize non-standard order values', () => {
			const comp1 = comparison.fromKey('value', 10 as any);
			const comp2 = comparison.fromKey('value', 1);
			
			const item1 = { value: 1 };
			const item2 = { value: 2 };
			
			// Both should behave the same (normalized to 1)
			expect(comp1(item1, item2)).toBe(comp2(item1, item2));
		});
	});
});
