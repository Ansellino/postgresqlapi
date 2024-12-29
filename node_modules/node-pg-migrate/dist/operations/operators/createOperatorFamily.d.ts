import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { DropOperatorFamilyOptions } from './dropOperatorFamily';
export interface CreateOperatorFamilyOptions {
}
export type CreateOperatorFamilyFn = (operatorFamilyName: Name, indexMethod: Name, operatorFamilyOptions?: CreateOperatorFamilyOptions & DropOperatorFamilyOptions) => string;
export type CreateOperatorFamily = Reversible<CreateOperatorFamilyFn>;
export declare function createOperatorFamily(mOptions: MigrationOptions): CreateOperatorFamily;
