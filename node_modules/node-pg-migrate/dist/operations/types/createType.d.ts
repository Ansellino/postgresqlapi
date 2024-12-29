import type { MigrationOptions } from '../../types';
import type { Name, Reversible, Type, Value } from '../generalTypes';
import type { DropTypeOptions } from './dropType';
export type CreateTypeFn = (typeName: Name, values: (Value[] | {
    [name: string]: Type;
}) & DropTypeOptions) => string;
export type CreateType = Reversible<CreateTypeFn>;
export declare function createType(mOptions: MigrationOptions): CreateType;
