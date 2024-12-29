import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { DropTableOptions } from './dropTable';
import type { ColumnDefinitions, TableOptions } from './shared';
export type CreateTableFn = (tableName: Name, columns: ColumnDefinitions, options?: TableOptions & DropTableOptions) => string;
export type CreateTable = Reversible<CreateTableFn>;
export declare function createTable(mOptions: MigrationOptions): CreateTable;
