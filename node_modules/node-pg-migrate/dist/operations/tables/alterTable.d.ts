import type { MigrationOptions } from '../../types';
import type { Name } from '../generalTypes';
export interface AlterTableOptions {
    levelSecurity: 'DISABLE' | 'ENABLE' | 'FORCE' | 'NO FORCE';
}
export type AlterTable = (tableName: Name, tableOptions: AlterTableOptions) => string;
export declare function alterTable(mOptions: MigrationOptions): AlterTable;
