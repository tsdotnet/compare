import {expect} from 'chai';
import areSequencesEqual from '../src/areSequencesEqual';

describe('areSequencesEqual', () => {
	it('should return true if matching elements', () => {
		expect(areSequencesEqual([1, 2, 3], [1, 2, 3])).to.be.true;
		expect(areSequencesEqual(null!, null!)).to.be.true;
	});
	it('should return false if not matching elements', () => {
		expect(areSequencesEqual([1, 2, 3], null!)).to.be.false;
		expect(areSequencesEqual([1, 2, 3], [1, 2])).to.be.false;
		expect(areSequencesEqual([1, 2, 3], [3, 2, 1])).to.be.false;
	});
});
