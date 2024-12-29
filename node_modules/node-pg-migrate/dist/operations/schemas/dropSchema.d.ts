import type { MigrationOptions } from '../../types';
import type { DropOptions } from '../generalTypes';
export type DropSchemaOptions = DropOptions;
export type DropSchema = (schemaName: string, dropOptions?: DropSchemaOptions) => string;
export declare function dropSchema(mOptions: MigrationOptions): DropSchema;
