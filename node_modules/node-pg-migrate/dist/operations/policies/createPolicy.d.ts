import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { DropPolicyOptions } from './dropPolicy';
import type { PolicyOptions } from './shared';
export interface CreatePolicyOptionsEn {
    command?: 'ALL' | 'SELECT' | 'INSERT' | 'UPDATE' | 'DELETE';
}
export type CreatePolicyOptions = CreatePolicyOptionsEn & PolicyOptions;
type CreatePolicyFn = (tableName: Name, policyName: string, policyOptions?: CreatePolicyOptions & DropPolicyOptions) => string;
export type CreatePolicy = Reversible<CreatePolicyFn>;
export declare function createPolicy(mOptions: MigrationOptions): CreatePolicy;
export {};
