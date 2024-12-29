import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { OperatorListDefinition } from './shared';
export type AddToOperatorFamilyFn = (operatorFamilyName: Name, indexMethod: Name, operatorList: OperatorListDefinition[]) => string;
export type AddToOperatorFamily = Reversible<AddToOperatorFamilyFn>;
export declare const addToOperatorFamily: (mOptions: MigrationOptions) => AddToOperatorFamily;
