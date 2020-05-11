/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
import { ArrayLikeWritable, Primitive as P } from '@tsdotnet/common-interfaces';
declare namespace type {
    type Primitive = P;
    type Literal = 'boolean' | 'number' | 'string' | 'symbol' | 'object' | 'undefined' | 'function';
    const enum Value {
        Boolean = "boolean",
        Number = "number",
        String = "string",
        Symbol = "symbol",
        Object = "object",
        Undefined = "undefined",
        Function = "function"
    }
    /**
     * Returns true if the target matches the type (instanceof).
     * @param target
     * @param type
     * @returns {T|null}
     */
    function is<T extends object>(target: object, type: new (...params: any[]) => T): target is T;
    /**
     * Returns null if the target does not match the type (instanceof).
     * Otherwise returns the target as the type.
     * @param target
     * @param type
     * @returns {T|null}
     */
    function as<T>(target: object, type: new (...params: any[]) => T): T | null;
    /**
     * Returns true if the value parameter is null or undefined.
     * @param value
     * @returns {boolean}
     */
    function isNullOrUndefined(value: any): value is null | undefined;
    /**
     * Returns true if the value parameter is a boolean.
     * @param value
     * @returns {boolean}
     */
    function isBoolean(value: any): value is boolean;
    /**
     * Returns true if the value parameter is a number.
     * @param value
     * @param ignoreNaN Default is false. When true, NaN is not considered a number and will return false.
     * @returns {boolean}
     */
    function isNumber(value: any, ignoreNaN?: boolean): value is number;
    /**
     * Returns true if is a number and is NaN.
     * @param value
     * @returns {boolean}
     */
    function isTrueNaN(value: any): value is number;
    /**
     * Returns true if the value parameter is a string.
     * @param value
     * @returns {boolean}
     */
    function isString(value: any): value is string;
    /**
     * Returns true if the value is a boolean, string, number, null, or undefined.
     * @param value
     * @param allowUndefined if set to true will return true if the value is undefined.
     * @returns {boolean}
     */
    function isPrimitive(value: any, allowUndefined?: boolean): value is Primitive;
    /**
     * For detecting if the value can be used as a key.
     * @param value
     * @param allowUndefined
     * @returns {boolean|boolean}
     */
    function isPrimitiveOrSymbol(value: any, allowUndefined?: boolean): value is Primitive | symbol;
    /**
     * Returns true if the value is a string, number, or symbol.
     * @param value
     * @returns {boolean}
     */
    function isPropertyKey(value: any): value is string | number | symbol;
    /**
     * Returns true if the value parameter is a function.
     * @param value
     * @returns {boolean}
     */
    function isFunction(value: any): value is (...params: any[]) => any;
    /**
     * Returns true if the value parameter is an object.
     * @param value
     * @param allowNull If false (default) null is not considered an object.
     * @returns {boolean}
     */
    function isObject(value: any, allowNull?: boolean): boolean;
    /**
     * Guarantees a number value or NaN instead.
     * @param value
     * @returns {number}
     */
    function numberOrNaN(value: any): number;
    /**
     * Will detect if a member exists (using 'in').
     * Returns true if a property or method exists on the object or its prototype.
     * @param instance
     * @param property Name of the member.
     * @param ignoreUndefined When ignoreUndefined is true, if the member exists but is undefined, it will return false.
     * @returns {boolean}
     */
    function hasMember(instance: any, property: string, ignoreUndefined?: boolean): boolean;
    /**
     * Returns true if the member matches the type.
     * @param instance
     * @param property
     * @param type
     * @returns {boolean}
     */
    function hasMemberOfType<T>(instance: any, property: string, type: Value): instance is T;
    /**
     * Tests to see if an object has a function of the provide name.
     * @param instance
     * @param {string} name
     * @returns {instance is T}
     */
    function hasMethod<T>(instance: any, name: string): instance is T;
    /**
     * Checks to see if object is an array or something with length property that isn't a function.
     * @param instance
     * @returns {instance is ArrayLikeWritable<T>}
     */
    function isArrayLike<T>(instance: any): instance is ArrayLikeWritable<T>;
}
export default type;
