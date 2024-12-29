import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
import type { FunctionParam } from './shared';
export type DropFunctionOptions = DropOptions;
export type DropFunction = (functionName: Name, functionParams: FunctionParam[], dropOptions?: DropFunctionOptions) => string;
export declare function dropFunction(mOptions: MigrationOptions): DropFunction;
