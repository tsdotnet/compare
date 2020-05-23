/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
/**
 * @packageDocumentation
 * @module compare
 */
import { Selector } from '@tsdotnet/common-interfaces';
declare type KeyOf<T> = keyof T;
declare type Keys<T> = KeyOf<T>[];
declare type ValueOf<T> = T[keyof T];
/**
 * Creates a selector that iterates the keys in order provided.
 * @param keys The keys desired.
 * @return The selector function.
 */
export default function createKeySelector<T extends Record<PropertyKey, unknown>>(...keys: Keys<T>): Selector<T, Iterable<ValueOf<T>>>;
export {};
