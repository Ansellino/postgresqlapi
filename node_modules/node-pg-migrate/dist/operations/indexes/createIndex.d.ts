import type { MigrationOptions } from '../../types';
import type { IfNotExistsOption, Name, Reversible } from '../generalTypes';
import type { DropIndexOptions } from './dropIndex';
import type { IndexColumn } from './shared';
export interface CreateIndexOptions extends IfNotExistsOption {
    name?: string;
    unique?: boolean;
    where?: string;
    concurrently?: boolean;
    /**
     * @deprecated should be parameter of IndexColumn
     */
    opclass?: Name;
    method?: 'btree' | 'hash' | 'gist' | 'spgist' | 'gin';
    include?: string | string[];
}
export type CreateIndexFn = (tableName: Name, columns: string | Array<string | IndexColumn>, indexOptions?: CreateIndexOptions & DropIndexOptions) => string;
export type CreateIndex = Reversible<CreateIndexFn>;
export declare function createIndex(mOptions: MigrationOptions): CreateIndex;
