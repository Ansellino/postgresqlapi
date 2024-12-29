import type { Name } from '../operations/generalTypes';
/** @deprecated Use createSchemalize(options) instead. */
export declare function createSchemalize(shouldDecamelize: boolean, shouldQuote: boolean): (value: Name) => string;
export declare function createSchemalize(options: {
    shouldDecamelize: boolean;
    shouldQuote: boolean;
}): (value: Name) => string;
