import type { MigrationOptions } from '../../types';
import type { Name, Reversible, Type } from '../generalTypes';
import type { DropOperatorClassOptions } from './dropOperatorClass';
import type { OperatorListDefinition } from './shared';
export interface CreateOperatorClassOptions {
    default?: boolean;
    family?: string;
}
export type CreateOperatorClassFn = (operatorClassName: Name, type: Type, indexMethod: Name, operatorList: OperatorListDefinition[], operatorClassOptions: CreateOperatorClassOptions & DropOperatorClassOptions) => string;
export type CreateOperatorClass = Reversible<CreateOperatorClassFn>;
export declare function createOperatorClass(mOptions: MigrationOptions): CreateOperatorClass;
