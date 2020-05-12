import {expect} from 'chai';
import compare from '../src/compare';
import CompareResult from '../src/CompareResult';

describe('compare', () => {
	describe('compare.primitives', () => {
		it('should return greater for greater elements', () => {
			expect(compare.primitives(1, 2))
				.to.equal(CompareResult.Less);
			expect(compare.primitives(4, 3))
				.to.equal(CompareResult.Greater);
			expect([2, 3, 1].sort(compare.primitives)[0])
				.to.equal(1);
		});

		describe('compare.primitives.inverted', () => {
			expect(compare.primitives.inverted(1, 2))
				.to.equal(CompareResult.Greater);
			expect(compare.primitives.inverted(4, 3))
				.to.equal(CompareResult.Less);
			expect([2, 3, 1].sort(compare.primitives.inverted)[0])
				.to.equal(3);
		});
	});
});
