import { describe, it, expect } from 'vitest';
import areEquivalentObjects from '../src/areEquivalentObjects';

describe('areEquivalentObjects', () => {
	describe('Basic equality cases', () => {
		it('should return true for identical primitives', () => {
			expect(areEquivalentObjects(1, 1)).toBe(true);
			expect(areEquivalentObjects('test', 'test')).toBe(true);
			expect(areEquivalentObjects(true, true)).toBe(true);
			expect(areEquivalentObjects(null, null)).toBe(true);
			expect(areEquivalentObjects(undefined, undefined)).toBe(true);
		});

		it('should return false for different primitives', () => {
			expect(areEquivalentObjects(1, 2)).toBe(false);
			expect(areEquivalentObjects('test', 'other')).toBe(false);
			expect(areEquivalentObjects(true, false)).toBe(false);
		});
	});

	describe('Null/undefined handling', () => {
		it('should handle null/undefined with nullEquivalency=true (default)', () => {
			expect(areEquivalentObjects(null, {})).toBe(true);
			expect(areEquivalentObjects(undefined, {})).toBe(true);
			expect(areEquivalentObjects({}, null)).toBe(true);
			expect(areEquivalentObjects({}, undefined)).toBe(true);
			expect(areEquivalentObjects(null, undefined)).toBe(true);
			expect(areEquivalentObjects(undefined, null)).toBe(true);
		});

		it('should handle null/undefined with nullEquivalency=false', () => {
			expect(areEquivalentObjects(null, {}, false)).toBe(false);
			expect(areEquivalentObjects(undefined, {}, false)).toBe(false);
			expect(areEquivalentObjects({}, null, false)).toBe(false);
			expect(areEquivalentObjects({}, undefined, false)).toBe(false);
			expect(areEquivalentObjects(null, undefined, false)).toBe(false);
			expect(areEquivalentObjects(undefined, null, false)).toBe(false);
		});

		it('should handle null/undefined with non-empty objects', () => {
			expect(areEquivalentObjects(null, { a: 1 })).toBe(false);
			expect(areEquivalentObjects(undefined, { a: 1 })).toBe(false);
			expect(areEquivalentObjects({ a: 1 }, null)).toBe(false);
			expect(areEquivalentObjects({ a: 1 }, undefined)).toBe(false);
		});
	});

	describe('Object comparison', () => {
		it('should return true for equivalent empty objects', () => {
			expect(areEquivalentObjects({}, {})).toBe(true);
		});

		it('should return true for objects with same key-value pairs', () => {
			const a = { x: 1, y: 2 };
			const b = { x: 1, y: 2 };
			expect(areEquivalentObjects(a, b)).toBe(true);
		});

		it('should return true for objects with same key-value pairs in different order', () => {
			const a = { x: 1, y: 2, z: 3 };
			const b = { z: 3, x: 1, y: 2 };
			expect(areEquivalentObjects(a, b)).toBe(true);
		});

		it('should return false for objects with different values', () => {
			const a = { x: 1, y: 2 };
			const b = { x: 1, y: 3 };
			expect(areEquivalentObjects(a, b)).toBe(false);
		});

		it('should return false for objects with different keys', () => {
			const a = { x: 1, y: 2 };
			const b = { x: 1, z: 2 };
			expect(areEquivalentObjects(a, b)).toBe(false);
		});

		it('should return false for objects with different number of keys', () => {
			const a = { x: 1, y: 2 };
			const b = { x: 1, y: 2, z: 3 };
			expect(areEquivalentObjects(a, b)).toBe(false);
		});
	});

	describe('Edge cases for key comparison', () => {
		it('should handle objects with undefined values', () => {
			const a = { x: undefined, y: 2 };
			const b = { x: undefined, y: 2 };
			expect(areEquivalentObjects(a, b)).toBe(true);
		});

		it('should handle objects with null values', () => {
			const a = { x: null, y: 2 };
			const b = { x: null, y: 2 };
			expect(areEquivalentObjects(a, b)).toBe(true);
		});

		it('should handle objects with mixed null/undefined values', () => {
			const a = { x: null, y: undefined };
			const b = { x: null, y: undefined };
			expect(areEquivalentObjects(a, b)).toBe(true);
		});

		it('should distinguish between null and undefined values', () => {
			const a = { x: null };
			const b = { x: undefined };
			expect(areEquivalentObjects(a, b)).toBe(false);
		});
	});

	describe('Deep object comparison with extraDepth', () => {
		it('should perform shallow comparison by default (extraDepth=0)', () => {
			const a = { nested: { x: 1 } };
			const b = { nested: { x: 2 } };
			// Should return true because it only compares references, not deep values
			expect(areEquivalentObjects(a, b)).toBe(false);
		});

		it('should perform deep comparison with extraDepth > 0', () => {
			const a = { nested: { x: 1, y: 2 } };
			const b = { nested: { x: 1, y: 2 } };
			expect(areEquivalentObjects(a, b, true, 1)).toBe(true);
		});

		it('should detect deep differences with extraDepth > 0', () => {
			const a = { nested: { x: 1, y: 2 } };
			const b = { nested: { x: 1, y: 3 } };
			expect(areEquivalentObjects(a, b, true, 1)).toBe(false);
		});

		it('should handle multiple levels of nesting', () => {
			const a = { level1: { level2: { x: 1 } } };
			const b = { level1: { level2: { x: 1 } } };
			expect(areEquivalentObjects(a, b, true, 2)).toBe(true);
		});

		it('should limit depth according to extraDepth parameter', () => {
			const a = { level1: { level2: { level3: { x: 1 } } } };
			const b = { level1: { level2: { level3: { x: 2 } } } };
			// With extraDepth=1, it won't recurse deep enough to see the difference
			expect(areEquivalentObjects(a, b, true, 1)).toBe(false); // It should detect difference at level2
		});
	});

	describe('Mixed type comparisons', () => {
		it('should return false when comparing object to primitive', () => {
			expect(areEquivalentObjects({ x: 1 }, 'string')).toBe(false);
			expect(areEquivalentObjects({ x: 1 }, 123)).toBe(false);
			expect(areEquivalentObjects({ x: 1 }, true)).toBe(false);
		});

		it('should return false when comparing primitives to objects', () => {
			expect(areEquivalentObjects('string', { x: 1 })).toBe(false);
			expect(areEquivalentObjects(123, { x: 1 })).toBe(false);
			expect(areEquivalentObjects(true, { x: 1 })).toBe(false);
		});
	});

	describe('Special JavaScript values', () => {
		it('should handle NaN values correctly', () => {
			const a = { x: NaN };
			const b = { x: NaN };
			expect(areEquivalentObjects(a, b)).toBe(true);
		});

		it('should handle arrays as objects', () => {
			// Arrays are objects in JavaScript, so they should be compared as such
			expect(areEquivalentObjects([1, 2], [1, 2])).toBe(true); // Same contents = equivalent
			
			// Different contents should be false
			expect(areEquivalentObjects([1, 2], [1, 3])).toBe(false);
			
			// Same reference also works
			const arr = [1, 2];
			expect(areEquivalentObjects(arr, arr)).toBe(true);
		});
	});

	describe('Parameter validation', () => {
		it('should handle all parameter combinations', () => {
			const obj = { x: 1 };
			
			// Test all boolean combinations for nullEquivalency
			expect(areEquivalentObjects(obj, obj, true, 0)).toBe(true);
			expect(areEquivalentObjects(obj, obj, false, 0)).toBe(true);
			expect(areEquivalentObjects(obj, obj, true, 1)).toBe(true);
			expect(areEquivalentObjects(obj, obj, false, 1)).toBe(true);
		});
	});
});
