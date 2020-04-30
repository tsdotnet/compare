import type from '../src/type';

describe('.hasMember()', () => {
	it('should detect a positive match for prototype functions', () => {
		class A
			extends Array {}

		expect(type.hasMember(new A(), 'push')).toBeTrue();
	});

	it('should detect a positive match', () => {
		expect(type.hasMember({
			a: 'hello',
			b: undefined
		}, 'b')).toBeTrue();
	});
});
