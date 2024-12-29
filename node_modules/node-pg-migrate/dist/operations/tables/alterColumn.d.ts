import type { MigrationOptions } from '../../types';
import type { Name, Value } from '../generalTypes';
import type { SequenceGeneratedOptions } from './shared';
export interface AlterColumnOptions {
    type?: string;
    default?: Value;
    notNull?: boolean;
    allowNull?: boolean;
    collation?: string;
    using?: string;
    comment?: string | null;
    /**
     * @deprecated use sequenceGenerated
     */
    generated?: null | false | SequenceGeneratedOptions;
    sequenceGenerated?: null | false | SequenceGeneratedOptions;
}
export type AlterColumn = (tableName: Name, columnName: string, options: AlterColumnOptions) => string;
export declare function alterColumn(mOptions: MigrationOptions): AlterColumn;
