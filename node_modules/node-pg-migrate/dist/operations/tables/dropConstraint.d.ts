import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export type DropConstraintOptions = DropOptions;
export type DropConstraint = (tableName: Name, constraintName: string, options?: DropConstraintOptions) => string;
export declare function dropConstraint(mOptions: MigrationOptions): DropConstraint;
