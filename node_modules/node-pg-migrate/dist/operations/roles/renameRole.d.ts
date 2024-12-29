import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameRoleFn = (oldRoleName: Name, newRoleName: Name) => string;
export type RenameRole = Reversible<RenameRoleFn>;
export declare function renameRole(mOptions: MigrationOptions): RenameRole;
