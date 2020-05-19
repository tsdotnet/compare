/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { ArrayLikeWritable, NullablePrimitive, Primitive as P } from '@tsdotnet/common-interfaces';
declare namespace type {
    export type Primitive = P;
    export const enum Value {
        Boolean = "boolean",
        Number = "number",
        String = "string",
        Symbol = "symbol",
        Object = "object",
        Undefined = "undefined",
        Function = "function"
    }
    type Name<T> = T extends symbol ? 'symbol' : T extends string ? 'string' : T extends number ? 'number' : T extends boolean ? 'boolean' : T extends undefined ? 'undefined' : T extends Function ? 'function' : 'object';
    export type Literal = Name<symbol> | Name<string> | Name<number> | Name<boolean> | Name<undefined> | Name<Function> | Name<object>;
    /**
     * Returns true if the target matches the type (instanceof).
     * @param target
     * @param type
     * @returns {T|null}
     */
    export function is<T extends object>(target: object, type: new (...params: any[]) => T): target is T;
    /**
     * Returns null if the target does not match the type (instanceof).
     * Otherwise returns the target as the type.
     * @param target
     * @param type
     * @returns {T|null}
     */
    export function as<T>(target: object, type: new (...params: any[]) => T): T | null;
    /**
     * Returns true if the value parameter is null or undefined.
     * @param value
     * @returns {boolean}
     */
    export function isNullOrUndefined(value: any): value is null | undefined;
    /**
     * Returns true if the value parameter is a boolean.
     * @param value
     * @returns {boolean}
     */
    export function isBoolean(value: any): value is boolean;
    /**
     * Returns true if the value parameter is a number.
     * @param value
     * @param ignoreNaN Default is false. When true, NaN is not considered a number and will return false.
     * @returns {boolean}
     */
    export function isNumber(value: any, ignoreNaN?: boolean): value is number;
    /**
     * Returns true if is a number and is NaN.
     * @param value
     * @returns {boolean}
     */
    export function isTrueNaN(value: any): value is number;
    /**
     * Returns true if the value parameter is a string.
     * @param value
     * @returns {boolean}
     */
    export function isString(value: any): value is string;
    /**
     * Returns true if the value is a boolean, string, number, or null.
     * @param value
     * @returns {boolean}
     */
    export function isPrimitive(value: any): value is NullablePrimitive;
    /**
     * Returns true if the value is a boolean, string, number, null, or undefined.
     * @param value
     * @param allowUndefined if set to true will return true if the value is undefined.
     * @returns {boolean}
     */
    export function isPrimitive(value: any, allowUndefined: false): value is NullablePrimitive;
    export function isPrimitive(value: any, allowUndefined: boolean): value is NullablePrimitive | undefined;
    /**
     * For detecting if the value can be used as a key.
     * @param value
     * @returns {boolean}
     */
    export function isPrimitiveOrSymbol(value: any): value is NullablePrimitive | symbol;
    /**
     * For detecting if the value can be used as a key.
     * @param value
     * @param allowUndefined
     * @returns {boolean}
     */
    export function isPrimitiveOrSymbol(value: any, allowUndefined: false): value is NullablePrimitive | symbol;
    export function isPrimitiveOrSymbol(value: any, allowUndefined: boolean): value is NullablePrimitive | symbol | undefined;
    /**
     * Returns true if the value is a string, number, or symbol.
     * @param value
     * @returns {boolean}
     */
    export function isPropertyKey(value: any): value is string | number | symbol;
    /**
     * Returns true if the value parameter is a function.
     * @param value
     * @returns {boolean}
     */
    export function isFunction(value: any): value is (...params: any[]) => any;
    /**
     * Returns true if the value parameter is an object.
     * @param value
     * @returns {boolean}
     */
    export function isObject(value: any): value is object;
    /**
     * Returns true if the value parameter is an object.
     * @param value
     * @param allowNull If false (default) null is not considered an object.
     * @returns {boolean}
     */
    export function isObject(value: any, allowNull: false): value is object;
    export function isObject(value: any, allowNull: boolean): value is object | null;
    /**
     * Guarantees a number value or NaN instead.
     * @param value
     * @returns {number}
     */
    export function numberOrNaN(value: any): number;
    /**
     * Will detect if a member exists (using 'in').
     * Returns true if a property or method exists on the object or its prototype.
     * @param instance
     * @param property Name of the member.
     * @param ignoreUndefined When ignoreUndefined is true, if the member exists but is undefined, it will return false.
     * @returns {boolean}
     */
    export function hasMember(instance: any, property: string, ignoreUndefined?: boolean): boolean;
    /**
     * Returns true if the member matches the type.
     * @param instance
     * @param property
     * @param type
     * @returns {boolean}
     */
    export function hasMemberOfType<T>(instance: any, property: string, type: Literal): instance is T;
    /**
     * Tests to see if an object has a function of the provide name.
     * @param instance
     * @param {string} name
     * @returns {instance is T}
     */
    export function hasMethod<T>(instance: any, name: string): instance is T;
    /**
     * Checks to see if object is an array or something with length property that isn't a function.
     * @param instance
     * @returns {instance is ArrayLikeWritable<T>}
     */
    export function isArrayLike<T>(instance: any): instance is ArrayLikeWritable<T>;
    export {};
}
export default type;
