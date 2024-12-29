import type { MigrationOptions } from '../../types';
import type { IfExistsOption, Name } from '../generalTypes';
export type DropRoleOptions = IfExistsOption;
export type DropRole = (roleName: Name, dropOptions?: DropRoleOptions) => string;
export declare function dropRole(mOptions: MigrationOptions): DropRole;
