import { describe, it, expect } from 'vitest';
import compare from '../src/compare';
import CompareResult from '../src/CompareResult';

describe('compare', () => {
	describe('compare.primitives', () => {
		it('should return greater for greater elements', () => {
			expect(compare.primitives(1, 2))
				.toBe(CompareResult.Less);
			expect(compare.primitives(4, 3))
				.toBe(CompareResult.Greater);
			expect([2, 3, 1].sort(compare.primitives)[0])
				.toBe(1);
		});

		describe('compare.primitives.inverted', () => {
			it('should return inverted comparison results', () => {
				expect(compare.primitives.inverted(1, 2))
					.toBe(CompareResult.Greater);
				expect(compare.primitives.inverted(4, 3))
					.toBe(CompareResult.Less);
				expect([2, 3, 1].sort(compare.primitives.inverted)[0])
					.toBe(3);
			});
		});
	});
});
