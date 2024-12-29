import type { MigrationOptions } from '../../types';
import type { Name } from '../generalTypes';
import type { OperatorListDefinition } from './shared';
export type RemoveFromOperatorFamily = (operatorFamilyName: Name, indexMethod: Name, operatorList: OperatorListDefinition[]) => string;
export declare const removeFromOperatorFamily: (mOptions: MigrationOptions) => RemoveFromOperatorFamily;
