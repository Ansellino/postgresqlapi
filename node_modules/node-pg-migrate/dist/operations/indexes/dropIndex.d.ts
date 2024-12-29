import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
import type { IndexColumn } from './shared';
export interface DropIndexOptions extends DropOptions {
    unique?: boolean;
    name?: string;
    concurrently?: boolean;
}
export type DropIndex = (tableName: Name, columns: string | Array<string | IndexColumn>, dropOptions?: DropIndexOptions) => string;
export declare function dropIndex(mOptions: MigrationOptions): DropIndex;
