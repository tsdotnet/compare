/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import type { Primitive, Selector } from '@tsdotnet/common-interfaces';
import type { Comparison } from './Comparable.js';
import { type OrderOrValue } from './Order.js';
import type { OrderByComparison, OrderByKey, OrderBySelector } from './OrderBy.js';
export declare function fromSelector<T>(selector: Selector<T, Primitive>, order?: OrderOrValue): Comparison<T>;
export declare function fromKey<T extends object>(key: keyof T, order?: OrderOrValue): Comparison<T>;
export declare function fromKeys<T extends object>(keys: (keyof T)[]): Comparison<T>;
export declare function fromKeys<T extends object>(keys: {
    [P in keyof T]?: OrderOrValue;
}): Comparison<T>;
export declare function join<T>(comparisons: Iterable<Comparison<T>>): Comparison<T>;
export declare function from<T>(orderBy: OrderBySelector<T> | OrderByComparison<T> | [OrderByComparison<T> | OrderBySelector<T>]): Comparison<T>;
export declare function from<T extends object>(orderBy: OrderByKey<T> | OrderBySelector<T> | OrderByComparison<T> | [OrderByKey<T> | OrderBySelector<T> | OrderByComparison<T>]): Comparison<T>;
export declare function invert<T>(comparison: Comparison<T>): Comparison<T>;
