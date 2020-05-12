import {expect} from 'chai';
import createKeySelector from '../src/createKeySelector';

describe('createKeySelector', () => {
	it('should values of keys in order', () => {
		const obj = {
			a: 1,
			b: 'b',
			c: false,
			d: {}
		};
		let i = 0;
		for(const v of createKeySelector<typeof obj>('a', 'c', 'd')(obj))
		{
			switch(i++)
			{
				case 0:
					expect(v).equal(obj.a);
					break;

				case 1:
					expect(v).equal(obj.c);
					break;

				case 2:
					expect(v).equal(obj.d);
					break;

				default:
					expect.fail('Should not have more than 3 entries.');
			}
		}
	});
});
