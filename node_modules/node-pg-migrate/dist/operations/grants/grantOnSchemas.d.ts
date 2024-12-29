import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { RevokeOnSchemasOptions } from './revokeOnSchemas';
import type { RevokeOnObjectsOptions, SchemaPrivilege, WithGrantOption } from './shared';
export interface OnlyGrantOnSchemasOptions {
    privileges: SchemaPrivilege | SchemaPrivilege[] | 'ALL';
    schemas: string[] | string;
    roles: Name | Name[];
}
export type GrantOnSchemasOptions = OnlyGrantOnSchemasOptions & WithGrantOption & RevokeOnObjectsOptions;
export type GrantOnSchemasFn = (grantOptions: GrantOnSchemasOptions & RevokeOnSchemasOptions) => string;
export type GrantOnSchemas = Reversible<GrantOnSchemasFn>;
export declare function grantOnSchemas(mOptions: MigrationOptions): GrantOnSchemas;
