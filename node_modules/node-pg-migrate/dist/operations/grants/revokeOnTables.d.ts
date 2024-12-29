import type { MigrationOptions } from '../../types';
import type { AllTablesOptions, CommonOnTablesOptions, RevokeOnObjectsOptions, SomeTablesOptions } from './shared';
export type RevokeOnTablesOptions = CommonOnTablesOptions & (AllTablesOptions | SomeTablesOptions) & RevokeOnObjectsOptions;
export type RevokeOnTables = (revokeOptions: RevokeOnTablesOptions) => string;
export declare function revokeOnTables(mOptions: MigrationOptions): RevokeOnTables;
