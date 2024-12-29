import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameColumnFn = (tableName: Name, oldColumnName: string, newColumnName: string) => string;
export type RenameColumn = Reversible<RenameColumnFn>;
export declare function renameColumn(mOptions: MigrationOptions): RenameColumn;
