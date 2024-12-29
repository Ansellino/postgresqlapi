import type { MigrationOptions } from '../../types';
import type { Name } from '../generalTypes';
import type { RoleOptions } from './shared';
export type AlterRole = (roleName: Name, roleOptions: RoleOptions) => string;
export declare function alterRole(mOptions: MigrationOptions): AlterRole;
