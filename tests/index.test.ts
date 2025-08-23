import { describe, it, expect } from 'vitest';
import * as compare from '../src/index';

describe('index module exports', () => {
	it('should export all comparison functions', () => {
		expect(compare.areEqual).toBeDefined();
		expect(compare.areEquivalent).toBeDefined();
		expect(compare.areEquivalentObjects).toBeDefined();
		expect(compare.areSequencesEqual).toBeDefined();
		expect(compare.compare).toBeDefined();
		expect(compare.comparison).toBeDefined();
	});

	it('should export types and enums', () => {
		expect(compare.CompareResult).toBeDefined();
		expect(compare.EqualityOperator).toBeDefined();
		expect(compare.Order).toBeDefined();
	});

	it('should export context classes', () => {
		expect(compare.SortContext).toBeDefined();
		expect(compare.KeySortedContext).toBeDefined();
	});

	it('should export type utility', () => {
		expect(compare.type).toBeDefined();
	});

	it('should have working compare function', () => {
		expect(compare.compare(1, 2)).toBe(-1);
		expect(compare.compare(2, 1)).toBe(1);
		expect(compare.compare(1, 1)).toBe(0);
	});

	it('should have working areEqual function', () => {
		expect(compare.areEqual(1, 1)).toBe(true);
		expect(compare.areEqual(1, 2)).toBe(false);
	});

	it('should have working comparison utilities', () => {
		expect(compare.comparison.fromKey).toBeDefined();
		expect(compare.comparison.fromSelector).toBeDefined();
		expect(compare.comparison.join).toBeDefined();
	});
});
