import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { DropConstraintOptions } from './dropConstraint';
import type { ConstraintOptions } from './shared';
export type CreateConstraintFn = (tableName: Name, constraintName: string | null, constraintExpressionOrOptions: (ConstraintOptions & DropConstraintOptions) | string) => string;
export type CreateConstraint = Reversible<CreateConstraintFn>;
export declare function addConstraint(mOptions: MigrationOptions): CreateConstraint;
