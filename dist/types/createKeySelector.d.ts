/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type { Selector } from '@tsdotnet/common-interfaces';
type KeyOf<T> = keyof T;
type Keys<T> = KeyOf<T>[];
type ValueOf<T> = T[keyof T];
export default function createKeySelector<T extends Record<PropertyKey, unknown>>(...keys: Keys<T>): Selector<T, Iterable<ValueOf<T>>>;
export {};
