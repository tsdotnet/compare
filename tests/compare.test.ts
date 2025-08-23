import { describe, it, expect } from 'vitest';
import compare from '../src/compare';

class ComparableNumber {
	constructor(private value: number) {}
	
	compareTo(other: number | ComparableNumber): number {
		const otherValue = typeof other === 'number' ? other : other.value;
		return this.value - otherValue;
	}
}

class ComparableString {
	constructor(private value: string) {}
	
	compareTo(other: string | ComparableString): number {
		const otherValue = typeof other === 'string' ? other : other.value;
		return this.value.localeCompare(otherValue);
	}
}

describe('compare', () => {
	describe('with comparable objects', () => {
		it('should use compareTo method when first object has it', () => {
			const a = new ComparableNumber(5);
			const b = 3;
			expect(compare(a, b)).toBe(2);
		});

		it('should use compareTo method when second object has it', () => {
			const a = 3;
			const b = new ComparableNumber(5);
			expect(compare(a, b)).toBe(-2); // -b.compareTo(a) = -(5-3) = -2
		});

		it('should work with string comparable objects', () => {
			const a = new ComparableString('apple');
			const b = 'banana';
			expect(compare(a, b)).toBeLessThan(0);
		});

		it('should work when both objects are comparable', () => {
			const a = new ComparableNumber(10);
			const b = new ComparableNumber(5);
			expect(compare(a, b)).toBe(5);
		});

		it('should handle equal values with comparable objects', () => {
			const a = new ComparableNumber(5);
			const b = 5;
			expect(compare(a, b)).toBe(0);
		});
	});

	describe('with primitives', () => {
		it('should fall back to primitive comparison', () => {
			expect(compare(5, 3)).toBe(1);
			expect(compare('apple', 'banana')).toBe(-1);
			expect(compare(true, false)).toBe(1);
		});

		it('should handle string comparison', () => {
			expect(compare('a', 'b')).toBe(-1);
			expect(compare('b', 'a')).toBe(1);
			expect(compare('same', 'same')).toBe(0);
		});

		it('should handle number comparison', () => {
			expect(compare(1, 2)).toBe(-1);
			expect(compare(2, 1)).toBe(1);
			expect(compare(5, 5)).toBe(0);
		});
	});

	describe('compareInverted', () => {
		it('should invert the result of compare', () => {
			expect(compare.compareInverted(5, 3)).toBe(-1);
			expect(compare.compareInverted(3, 5)).toBe(1);
			expect(compare.compareInverted(5, 5)).toBe(-0);
		});

		it('should work with comparable objects', () => {
			const a = new ComparableNumber(5);
			const b = 3;
			expect(compare.compareInverted(a, b)).toBe(-2);
		});
	});

	describe('primitives export', () => {
		it('should expose comparePrimitives as primitives', () => {
			expect(compare.primitives).toBeDefined();
			expect(typeof compare.primitives).toBe('function');
			expect(compare.primitives(5, 3)).toBe(1);
		});
	});
});
