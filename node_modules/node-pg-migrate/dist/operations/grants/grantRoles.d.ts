import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { RevokeRolesOptions } from './revokeRoles';
import type { WithAdminOption } from './shared';
export type GrantRolesOptions = WithAdminOption;
export type GrantRolesFn = (rolesFrom: Name | Name[], rolesTo: Name | Name[], grantOptions?: GrantRolesOptions & RevokeRolesOptions) => string;
export type GrantRoles = Reversible<GrantRolesFn>;
export declare function grantRoles(mOptions: MigrationOptions): GrantRoles;
