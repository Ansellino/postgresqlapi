import type { MigrationOptions } from '../../types';
import type { Reversible } from '../generalTypes';
export type RenameSchemaFn = (oldSchemaName: string, newSchemaName: string) => string;
export type RenameSchema = Reversible<RenameSchemaFn>;
export declare function renameSchema(mOptions: MigrationOptions): RenameSchema;
