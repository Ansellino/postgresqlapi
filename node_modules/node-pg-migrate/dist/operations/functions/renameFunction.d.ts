import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { FunctionParam } from './shared';
export type RenameFunctionFn = (oldFunctionName: Name, functionParams: FunctionParam[], newFunctionName: Name) => string;
export type RenameFunction = Reversible<RenameFunctionFn>;
export declare function renameFunction(mOptions: MigrationOptions): RenameFunction;
