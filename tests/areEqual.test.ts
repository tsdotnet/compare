import { describe, it, expect } from 'vitest';
import areEqual from '../src/areEqual';
import areEquivalent from '../src/areEquivalent';

describe('areEqual', () => {
	it('should return true for actual equality', () => {
		expect(areEqual(1, 1)).toBe(true);
		expect(areEqual(false, null)).toBe(false);
		expect(areEqual(NaN, NaN)).toBe(true);
		expect(areEqual(0, null)).toBe(false);
		expect(areEqual(0, undefined)).toBe(false);
		expect(areEqual(undefined, null)).toBe(false);
	});
});

describe('areEquivalent', () => {
	it('should return true for actual equality', () => {
		expect(areEquivalent(1, 1)).toBe(true);
		expect(areEquivalent(false, null)).toBe(false);
		expect(areEquivalent(NaN, NaN)).toBe(true);
		expect(areEquivalent(0, null)).toBe(false);
		expect(areEquivalent(0, undefined)).toBe(false);
		expect(areEquivalent(undefined, null)).toBe(true);
	});
});
