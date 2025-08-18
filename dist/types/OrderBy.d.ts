/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */

import {Primitive, Selector} from '@tsdotnet/common-interfaces';
import {Comparison} from './Comparable';
import Order from './Order';

export type OrderByOption = {
	order?: Order;
};

export type OrderByComparison<T> = Comparison<T> | OrderByOption & {
	comparison: Comparison<T>;
};

export type OrderBySelector<T> = Selector<T, Primitive> | OrderByOption & {
	selector: Selector<T, Primitive>;
};

export type OrderByKey<T extends object> = keyof T | OrderByOption & {
	key: keyof T;
};
