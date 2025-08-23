import { describe, it, expect } from 'vitest';
import KeySortedContext from '../src/KeySortedContext';
import { OrderValue as Order } from '../src/Order';

interface Person {
	name: string;
	age: number;
}

const people: Person[] = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 30 },
	{ name: 'Charlie', age: 20 },
	{ name: 'Alice', age: 35 }
];

describe('KeySortedContext', () => {
	describe('constructor', () => {
		it('should create with basic parameters', () => {
			const context = new KeySortedContext<Person, string>(
				null,
				p => p.name
			);
			expect(context).toBeDefined();
		});

		it('should create with custom order', () => {
			const context = new KeySortedContext<Person, number>(
				null,
				p => p.age,
				Order.Descending
			);
			expect(context).toBeDefined();
		});

		it('should create with next comparer', () => {
			const nextComparer = {
				compare: (a: Person, b: Person) => a.name.localeCompare(b.name)
			};
			const context = new KeySortedContext<Person, number>(
				nextComparer,
				p => p.age
			);
			expect(context).toBeDefined();
		});
	});

	describe('compare method', () => {
		it('should sort by key selector in ascending order', () => {
			const context = new KeySortedContext<Person, string>(
				null,
				p => p.name,
				Order.Ascending
			);

			const alice = { name: 'Alice', age: 25 };
			const bob = { name: 'Bob', age: 30 };

			expect(context.compare(alice, bob)).toBeLessThan(0);
			expect(context.compare(bob, alice)).toBeGreaterThan(0);
			expect(context.compare(alice, alice)).toBe(0);
		});

		it('should sort by key selector in descending order', () => {
			const context = new KeySortedContext<Person, string>(
				null,
				p => p.name,
				Order.Descending
			);

			const alice = { name: 'Alice', age: 25 };
			const bob = { name: 'Bob', age: 30 };

			expect(context.compare(alice, bob)).toBeGreaterThan(0);
			expect(context.compare(bob, alice)).toBeLessThan(0);
			expect(context.compare(alice, alice)).toBe(-0);
		});

		it('should sort by numeric key selector', () => {
			const context = new KeySortedContext<Person, number>(
				null,
				p => p.age,
				Order.Ascending
			);

			const young = { name: 'Young', age: 20 };
			const old = { name: 'Old', age: 30 };

			expect(context.compare(young, old)).toBeLessThan(0);
			expect(context.compare(old, young)).toBeGreaterThan(0);
			expect(context.compare(young, young)).toBe(0);
		});

		it('should use next comparer when key values are equal', () => {
			const nextComparer = {
				compare: (a: Person, b: Person) => a.age - b.age
			};
			const context = new KeySortedContext<Person, string>(
				nextComparer,
				p => p.name // Both Alice entries will have same name
			);

			const alice1 = { name: 'Alice', age: 25 };
			const alice2 = { name: 'Alice', age: 35 };

			// Should be equal by name, then sorted by age via next comparer
			const result = context.compare(alice1, alice2);
			expect(result).toBeLessThan(0); // 25 < 35
		});

		it('should fall back to super.compare when no key selector', () => {
			const context = new KeySortedContext<Person, string>(
				null,
				null // No key selector
			);

			const alice = { name: 'Alice', age: 25 };
			const bob = { name: 'Bob', age: 30 };

			// Should use default comparison
			const result = context.compare(alice, bob);
			expect(typeof result).toBe('number');
		});

		it('should not use next comparer when key values are different', () => {
			const nextComparer = {
				compare: () => 999 // This should not be called
			};
			const context = new KeySortedContext<Person, string>(
				nextComparer,
				p => p.name
			);

			const alice = { name: 'Alice', age: 25 };
			const bob = { name: 'Bob', age: 30 };

			const result = context.compare(alice, bob);
			expect(result).not.toBe(999); // Next comparer shouldn't be called
			expect(result).toBeLessThan(0);
		});
	});

	describe('integration with array sorting', () => {
		it('should work with array sort for ascending order', () => {
			const context = new KeySortedContext<Person, string>(
				null,
				p => p.name,
				Order.Ascending
			);

			const sorted = [...people].sort((a, b) => context.compare(a, b));
			
			expect(sorted).toHaveLength(4);
			const first = sorted[0];
			const second = sorted[1];
			const third = sorted[2];
			const fourth = sorted[3];
			
			expect(first).toBeDefined();
			expect(first?.name).toBe('Alice');
			expect(second).toBeDefined();
			expect(second?.name).toBe('Alice');
			expect(third).toBeDefined();
			expect(third?.name).toBe('Bob');
			expect(fourth).toBeDefined();
			expect(fourth?.name).toBe('Charlie');
		});

		it('should work with array sort for descending order', () => {
			const context = new KeySortedContext<Person, number>(
				null,
				p => p.age,
				Order.Descending
			);

			const sorted = [...people].sort((a, b) => context.compare(a, b));
			
			expect(sorted).toHaveLength(4);
			const first = sorted[0];
			const second = sorted[1];
			const third = sorted[2];
			const fourth = sorted[3];
			
			expect(first).toBeDefined();
			expect(first?.age).toBe(35);
			expect(second).toBeDefined();
			expect(second?.age).toBe(30);
			expect(third).toBeDefined();
			expect(third?.age).toBe(25);
			expect(fourth).toBeDefined();
			expect(fourth?.age).toBe(20);
		});

		it('should work with chained comparers', () => {
			// First sort by name, then by age for same names
			const ageComparer = {
				compare: (a: Person, b: Person) => a.age - b.age
			};
			const context = new KeySortedContext<Person, string>(
				ageComparer,
				p => p.name,
				Order.Ascending
			);

			const sorted = [...people].sort((a, b) => context.compare(a, b));
			
			expect(sorted).toHaveLength(4);
			const first = sorted[0];
			const second = sorted[1];
			const third = sorted[2];
			const fourth = sorted[3];
			
			// Should have Alice (25), Alice (35), Bob (30), Charlie (20)
			expect(first).toBeDefined();
			expect(first?.name).toBe('Alice');
			expect(first?.age).toBe(25);
			expect(second).toBeDefined();
			expect(second?.name).toBe('Alice');
			expect(second?.age).toBe(35);
			expect(third).toBeDefined();
			expect(third?.name).toBe('Bob');
			expect(fourth).toBeDefined();
			expect(fourth?.name).toBe('Charlie');
		});
	});
});
