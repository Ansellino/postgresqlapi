import type { MigrationOptions } from '../../types';
import type { IfNotExistsOption, Name, Reversible } from '../generalTypes';
import type { DropColumnsOptions } from './dropColumns';
import type { ColumnDefinitions } from './shared';
export type AddColumnsOptions = IfNotExistsOption;
export type AddColumnsFn = (tableName: Name, newColumns: ColumnDefinitions, addOptions?: AddColumnsOptions & DropColumnsOptions) => string;
export type AddColumns = Reversible<AddColumnsFn>;
export declare function addColumns(mOptions: MigrationOptions): AddColumns;
