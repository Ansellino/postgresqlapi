import type { PublicPart } from '../operations/generalTypes';
/**
 * Represents a string that should not be escaped when used in a query.
 *
 * This will be used in `pgm.func` to create unescaped strings.
 */
export declare class PgLiteral {
    readonly value: string;
    /**
     * Creates a new `PgLiteral` instance.
     *
     * @param str The string value.
     * @returns The new `PgLiteral` instance.
     */
    static create(str: string): PgLiteral;
    /**
     * Indicates that this object is a `PgLiteral`.
     */
    readonly literal = true;
    /**
     * Creates a new `PgLiteral` instance.
     *
     * @param value The string value.
     */
    constructor(value: string);
    /**
     * Returns the string value.
     *
     * @returns The string value.
     */
    toString(): string;
}
export type PgLiteralValue = PublicPart<PgLiteral>;
/**
 * Checks if the given value is a `PgLiteral`.
 *
 * @param val The value to check.
 * @returns `true` if the value is a `PgLiteral`, or `false` otherwise.
 */
export declare function isPgLiteral(val: unknown): val is PgLiteral;
