import type { MigrationOptions } from '../../types';
import type { IfExistsOption, Name } from '../generalTypes';
export type DropPolicyOptions = IfExistsOption;
export type DropPolicy = (tableName: Name, policyName: string, dropOptions?: DropPolicyOptions) => string;
export declare function dropPolicy(mOptions: MigrationOptions): DropPolicy;
