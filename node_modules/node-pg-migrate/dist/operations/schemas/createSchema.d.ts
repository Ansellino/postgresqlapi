import type { MigrationOptions } from '../../types';
import type { IfNotExistsOption, Reversible } from '../generalTypes';
import type { DropSchemaOptions } from './dropSchema';
export interface CreateSchemaOptions extends IfNotExistsOption {
    authorization?: string;
}
export type CreateSchemaFn = (schemaName: string, schemaOptions?: CreateSchemaOptions & DropSchemaOptions) => string;
export type CreateSchema = Reversible<CreateSchemaFn>;
export declare function createSchema(mOptions: MigrationOptions): CreateSchema;
