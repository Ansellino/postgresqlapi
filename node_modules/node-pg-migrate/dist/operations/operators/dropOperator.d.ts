import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export interface DropOperatorOptions extends DropOptions {
    left?: Name;
    right?: Name;
}
export type DropOperator = (operatorName: Name, dropOptions?: DropOperatorOptions) => string;
export declare function dropOperator(mOptions: MigrationOptions): DropOperator;
