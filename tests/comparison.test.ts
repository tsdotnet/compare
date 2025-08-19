import { describe, it, expect } from 'vitest';
import * as comparison from '../src/comparison';
import { OrderValue } from '../src/Order.js';
import testItems, {TestItem} from './_testItems.js';

describe('comparison', () => {
	describe('.fromKey()', () => {
		it('should order by key ascending', () => {
			const items = testItems.slice().reverse();
			items.sort(comparison.fromKey<TestItem>('a'));
			expect(items[0].a).toBe(1);
			items.reverse();
			items.sort(comparison.from<TestItem>('a'));
			expect(items[0].a).toBe(1);
		});
		it('should order by key descending', () => {
			const items = testItems.slice();
			items.sort(comparison.fromKey<TestItem>('a', OrderValue.Descending));
			expect(items[0].a).toBe(2);
			expect(items.sort(comparison.fromKeys<TestItem>({a: OrderValue.Descending}))[0].a).toBe(2);
		});
	});

	describe('.fromKeys()', () => {
		it('should order by keys ascending', () => {
			const items = testItems.slice().reverse();
			items.sort(comparison.fromKeys<TestItem>(['a', 'b']));
			expect(items[0].a).toBe(1);
			expect(items[0].b).toBe(1);
			expect(items[1].a).toBe(1);
			expect(items[1].b).toBe(2);
		});
		it('should order by keys descending', () => {
			const items = testItems.slice();
			items.sort(comparison.fromKeys<TestItem>({a: OrderValue.Descending, b: OrderValue.Descending}));
			expect(items[0].a).toBe(2);
			expect(items[0].b).toBe(3);
		});
	});
});

