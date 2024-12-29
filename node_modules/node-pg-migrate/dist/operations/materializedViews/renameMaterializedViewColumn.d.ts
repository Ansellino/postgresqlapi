import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameMaterializedViewColumnFn = (viewName: Name, columnName: string, newColumnName: string) => string;
export type RenameMaterializedViewColumn = Reversible<RenameMaterializedViewColumnFn>;
export declare function renameMaterializedViewColumn(mOptions: MigrationOptions): RenameMaterializedViewColumn;
