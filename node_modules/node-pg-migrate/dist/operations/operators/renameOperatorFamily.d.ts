import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameOperatorFamilyFn = (oldOperatorFamilyName: Name, indexMethod: Name, newOperatorFamilyName: Name) => string;
export type RenameOperatorFamily = Reversible<RenameOperatorFamilyFn>;
export declare function renameOperatorFamily(mOptions: MigrationOptions): RenameOperatorFamily;
