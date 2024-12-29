import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { DropOperatorOptions } from './dropOperator';
export interface CreateOperatorOptions {
    procedure: Name;
    left?: Name;
    right?: Name;
    commutator?: Name;
    negator?: Name;
    restrict?: Name;
    join?: Name;
    hashes?: boolean;
    merges?: boolean;
}
export type CreateOperatorFn = (operatorName: Name, operatorOptions: CreateOperatorOptions & DropOperatorOptions) => string;
export type CreateOperator = Reversible<CreateOperatorFn>;
export declare function createOperator(mOptions: MigrationOptions): CreateOperator;
