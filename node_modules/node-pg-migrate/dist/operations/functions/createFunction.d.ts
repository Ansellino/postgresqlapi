import type { MigrationOptions } from '../../types';
import type { DropOptions, Name, Reversible, Value } from '../generalTypes';
import type { DropFunctionOptions } from './dropFunction';
import type { FunctionOptions, FunctionParam } from './shared';
export type CreateFunctionOptions = FunctionOptions & DropOptions;
export type CreateFunctionFn = (functionName: Name, functionParams: FunctionParam[], functionOptions: CreateFunctionOptions & DropFunctionOptions, definition: Value) => string;
export type CreateFunction = Reversible<CreateFunctionFn>;
export declare function createFunction(mOptions: MigrationOptions): CreateFunction;
