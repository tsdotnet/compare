import {expect} from 'chai';
import areEqual from '../src/areEqual';
import areEquivalent from '../src/areEquivalent';

describe('areEqual', () => {
	it('should return true for actual equality', () => {
		expect(areEqual(1, 1)).to.be.true;
		expect(areEqual(false, null)).to.be.false;
		expect(areEqual(NaN, NaN)).to.be.true;
		expect(areEqual(0, null)).to.be.false;
		expect(areEqual(0, undefined)).to.be.false;
		expect(areEqual(undefined, null)).to.be.false;
	});
});

describe('areEquivalent', () => {
	it('should return true for actual equality', () => {
		expect(areEquivalent(1, 1)).to.be.true;
		expect(areEquivalent(false, null)).to.be.false;
		expect(areEquivalent(NaN, NaN)).to.be.true;
		expect(areEqual(0, null)).to.be.false;
		expect(areEqual(0, undefined)).to.be.false;
		expect(areEqual(undefined, null)).to.be.true;
	});
});
