import { describe, it, expect } from 'vitest';
import * as comparison from '../src/comparison';
import { OrderValue } from '../src/Order.js';
import testItems, {TestItem} from './_testItems.js';

describe('comparison', () => {
	describe('.fromKey()', () => {
		it('should order by key ascending', () => {
			const items = testItems.slice().reverse();
			items.sort(comparison.fromKey<TestItem>('a'));
			expect(items).toHaveLength(testItems.length);
			expect(items.length).toBeGreaterThan(0);
			const firstItem = items[0];
			expect(firstItem).toBeDefined();
			expect(firstItem?.a).toBe(1);
			items.reverse();
			items.sort(comparison.from<TestItem>('a'));
			const firstAfterReverse = items[0];
			expect(firstAfterReverse).toBeDefined();
			expect(firstAfterReverse?.a).toBe(1);
		});
		it('should order by key descending', () => {
			const items = testItems.slice();
			items.sort(comparison.fromKey<TestItem>('a', OrderValue.Descending));
			expect(items).toHaveLength(testItems.length);
			expect(items.length).toBeGreaterThan(0);
			const firstItem = items[0];
			expect(firstItem).toBeDefined();
			expect(firstItem?.a).toBe(2);
			const sortedItems = items.sort(comparison.fromKeys<TestItem>({a: OrderValue.Descending}));
			expect(sortedItems).toHaveLength(testItems.length);
			expect(sortedItems.length).toBeGreaterThan(0);
			const firstSorted = sortedItems[0];
			expect(firstSorted).toBeDefined();
			expect(firstSorted?.a).toBe(2);
		});
	});

	describe('.fromKeys()', () => {
		it('should order by keys ascending', () => {
			const items = testItems.slice().reverse();
			items.sort(comparison.fromKeys<TestItem>(['a', 'b']));
			expect(items).toHaveLength(testItems.length);
			expect(items.length).toBeGreaterThanOrEqual(2);
			const firstItem = items[0];
			expect(firstItem).toBeDefined();
			expect(firstItem?.a).toBe(1);
			expect(firstItem?.b).toBe(1);
			const secondItem = items[1];
			expect(secondItem).toBeDefined();
			expect(secondItem?.a).toBe(1);
			expect(secondItem?.b).toBe(2);
		});
		it('should order by keys descending', () => {
			const items = testItems.slice();
			items.sort(comparison.fromKeys<TestItem>({a: OrderValue.Descending, b: OrderValue.Descending}));
			expect(items).toHaveLength(testItems.length);
			expect(items.length).toBeGreaterThan(0);
			const firstItem = items[0];
			expect(firstItem).toBeDefined();
			expect(firstItem?.a).toBe(2);
			expect(firstItem?.b).toBe(3);
		});
	});
});

