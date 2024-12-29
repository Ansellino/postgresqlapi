import type { Literal, MigrationOptions } from '../../types';
import type { Name } from '../generalTypes';
import type { CreateIndexOptions } from './createIndex';
import type { DropIndexOptions } from './dropIndex';
export interface IndexColumn {
    name: string;
    opclass?: Name;
    sort?: 'ASC' | 'DESC';
}
export declare function generateIndexName(table: Name, columns: Array<string | IndexColumn>, options: CreateIndexOptions | DropIndexOptions, schemalize: Literal): Name;
export declare function generateColumnString(column: Name, mOptions: MigrationOptions): string;
export declare function generateColumnsString(columns: Array<string | IndexColumn>, mOptions: MigrationOptions): string;
