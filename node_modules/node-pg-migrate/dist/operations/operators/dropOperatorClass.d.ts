import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export type DropOperatorClassOptions = DropOptions;
export type DropOperatorClass = (operatorClassName: Name, indexMethod: Name, dropOptions?: DropOperatorClassOptions) => string;
export declare function dropOperatorClass(mOptions: MigrationOptions): DropOperatorClass;
