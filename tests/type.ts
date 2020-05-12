import {expect} from 'chai';
import type from '../src/type';

describe('type', () => {

	describe('.hasMember()', () => {
		it('should detect a positive match for prototype functions', () => {
			class A
				extends Array {}

			expect(type.hasMember(new A(), 'push')).to.be.true;
		});

		it('should detect a positive match', () => {
			expect(type.hasMember({
				a: 'hello',
				b: undefined
			}, 'b')).to.be.true;
		});
	});

	describe('.isTrueNaN()', () => {
		it('should only return true for actual NaN', () => {
			expect(type.isTrueNaN(NaN)).to.be.true;
			expect(type.isTrueNaN(1)).to.be.false;
			expect(type.isTrueNaN('x')).to.be.false;
		});
	});
});
