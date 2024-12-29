import type { MigrationOptions } from '../../types';
import type { OnlyGrantOnSchemasOptions } from './grantOnSchemas';
import type { RevokeOnObjectsOptions } from './shared';
export type RevokeOnSchemasOptions = OnlyGrantOnSchemasOptions & RevokeOnObjectsOptions;
export type RevokeOnSchemas = (revokeOptions: RevokeOnSchemasOptions) => string;
export declare function revokeOnSchemas(mOptions: MigrationOptions): RevokeOnSchemas;
