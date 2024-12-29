import type { MigrationOptions } from '../../types';
import type { CascadeOption, Name } from '../generalTypes';
import type { OnlyAdminOption } from './shared';
export type RevokeRolesOptions = OnlyAdminOption & CascadeOption;
export type RevokeRoles = (roles: Name | Name[], rolesFrom: Name | Name[], revokeOptions?: RevokeRolesOptions) => string;
export declare function revokeRoles(mOptions: MigrationOptions): RevokeRoles;
