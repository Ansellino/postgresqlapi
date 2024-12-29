import type { MigrationOptions } from '../../types';
import type { Name } from '../generalTypes';
import type { PolicyOptions } from './shared';
export type AlterPolicy = (tableName: Name, policyName: string, policyOptions: PolicyOptions) => string;
export declare function alterPolicy(mOptions: MigrationOptions): AlterPolicy;
