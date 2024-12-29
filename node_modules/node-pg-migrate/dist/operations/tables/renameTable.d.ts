import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameTableFn = (tableName: Name, newtableName: Name) => string;
export type RenameTable = Reversible<RenameTableFn>;
export declare function renameTable(mOptions: MigrationOptions): RenameTable;
