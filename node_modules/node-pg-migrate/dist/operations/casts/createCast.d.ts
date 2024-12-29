import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { DropCastOptions } from './dropCast';
export interface CreateCastWithFunctionOptions {
    functionName: Name;
    argumentTypes?: string[];
    inout?: undefined;
}
export interface CreateCastWithoutFunctionOptions {
    functionName?: undefined;
    argumentTypes?: undefined;
    inout?: undefined;
}
export interface CreateCastWithInoutOptions {
    functionName?: undefined;
    argumentTypes?: undefined;
    inout: boolean;
}
export type CreateCastOptions = (CreateCastWithFunctionOptions | CreateCastWithoutFunctionOptions | CreateCastWithInoutOptions) & {
    as?: 'ASSIGNMENT' | 'IMPLICIT';
};
export type CreateCastFn = (fromType: string, toType: string, options: CreateCastOptions & DropCastOptions) => string;
export type CreateCast = Reversible<CreateCastFn>;
export declare function createCast(mOptions: MigrationOptions): CreateCast;
