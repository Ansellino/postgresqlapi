import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export type DropOperatorFamilyOptions = DropOptions;
export type DropOperatorFamily = (operatorFamilyName: Name, newSchemaName: Name, dropOptions?: DropOperatorFamilyOptions) => string;
export declare function dropOperatorFamily(mOptions: MigrationOptions): DropOperatorFamily;
