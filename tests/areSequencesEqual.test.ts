import { describe, it, expect } from 'vitest';
import areSequencesEqual from '../src/areSequencesEqual';

describe('areSequencesEqual', () => {
	it('should return true if matching elements', () => {
		expect(areSequencesEqual([1, 2, 3], [1, 2, 3])).toBe(true);
		expect(areSequencesEqual(null!, null!)).toBe(true);
	});
	it('should return false if not matching elements', () => {
		expect(areSequencesEqual([1, 2, 3], null!)).toBe(false);
		expect(areSequencesEqual([1, 2, 3], [1, 2])).toBe(false);
		expect(areSequencesEqual([1, 2, 3], [3, 2, 1])).toBe(false);
	});
});
