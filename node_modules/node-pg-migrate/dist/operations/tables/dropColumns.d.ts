import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export type DropColumnsOptions = DropOptions;
export type DropColumns = (tableName: Name, columns: string | string[] | {
    [name: string]: unknown;
}, dropOptions?: DropColumnsOptions) => string;
export declare function dropColumns(mOptions: MigrationOptions): DropColumns;
