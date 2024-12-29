import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export type DropTableOptions = DropOptions;
export type DropTable = (tableName: Name, dropOptions?: DropTableOptions) => string;
export declare function dropTable(mOptions: MigrationOptions): DropTable;
