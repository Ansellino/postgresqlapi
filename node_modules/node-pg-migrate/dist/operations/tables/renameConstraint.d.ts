import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameConstraintFn = (tableName: Name, oldConstraintName: string, newConstraintName: string) => string;
export type RenameConstraint = Reversible<RenameConstraintFn>;
export declare function renameConstraint(mOptions: MigrationOptions): RenameConstraint;
