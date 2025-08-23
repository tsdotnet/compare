import { describe, it, expect } from 'vitest';
import * as comparison from '../src/comparison';
import { OrderValue } from '../src/Order.js';
import testItems, {TestItem} from './_testItems.js';

describe('comparison', () => {
	describe('.fromKey()', () => {
		it('should order by key ascending', () => {
			const items = testItems.slice().reverse();
			items.sort(comparison.fromKey<TestItem>('a'));
			const first = items[0];
			expect(first).toBeDefined();
			expect(first?.a).toBe(1);
			items.reverse();
			items.sort(comparison.from<TestItem>('a'));
			const firstAfterReverse = items[0];
			expect(firstAfterReverse).toBeDefined();
			expect(firstAfterReverse?.a).toBe(1);
		});
		it('should order by key descending', () => {
			const items = testItems.slice();
			items.sort(comparison.fromKey<TestItem>('a', OrderValue.Descending));
			const first = items[0];
			expect(first).toBeDefined();
			expect(first?.a).toBe(2);
			const sorted = items.sort(comparison.fromKeys<TestItem>({a: OrderValue.Descending}));
			const firstSorted = sorted[0];
			expect(firstSorted).toBeDefined();
			expect(firstSorted?.a).toBe(2);
		});
	});

	describe('.fromKeys()', () => {
		it('should order by keys ascending', () => {
			const items = testItems.slice().reverse();
			items.sort(comparison.fromKeys<TestItem>(['a', 'b']));
			const first = items[0];
			const second = items[1];
			expect(first).toBeDefined();
			expect(first?.a).toBe(1);
			expect(first?.b).toBe(1);
			expect(second).toBeDefined();
			expect(second?.a).toBe(1);
			expect(second?.b).toBe(2);
		});
		it('should order by keys descending', () => {
			const items = testItems.slice();
			items.sort(comparison.fromKeys<TestItem>({a: OrderValue.Descending, b: OrderValue.Descending}));
			const first = items[0];
			expect(first).toBeDefined();
			expect(first?.a).toBe(2);
			expect(first?.b).toBe(3);
		});
	});
});

