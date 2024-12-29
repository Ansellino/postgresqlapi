import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenamePolicyFn = (tableName: Name, policyName: string, newPolicyName: string) => string;
export type RenamePolicy = Reversible<RenamePolicyFn>;
export declare function renamePolicy(mOptions: MigrationOptions): RenamePolicy;
