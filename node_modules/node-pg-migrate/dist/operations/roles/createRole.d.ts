import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { DropRoleOptions } from './dropRole';
import type { RoleOptions } from './shared';
export type CreateRoleOptions = RoleOptions;
export type CreateRoleFn = (roleName: Name, roleOptions?: CreateRoleOptions & DropRoleOptions) => string;
export type CreateRole = Reversible<CreateRoleFn>;
export declare function createRole(mOptions: MigrationOptions): CreateRole;
