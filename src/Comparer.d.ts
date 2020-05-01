/*!
 * @author electricessence / https://github.com/electricessence/
 * Based upon .NET source.
 * Licensing: MIT
 */

export default interface Comparer<T>
{
	compare (a: T, b: T): number;
}
