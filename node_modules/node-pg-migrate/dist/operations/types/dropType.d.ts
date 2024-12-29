import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export type DropTypeOptions = DropOptions;
export type DropType = (typeName: Name, dropOptions?: DropTypeOptions) => string;
export declare function dropType(mOptions: MigrationOptions): DropType;
