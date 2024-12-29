import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export type DropTriggerOptions = DropOptions;
export type DropTrigger = (tableName: Name, triggerName: string, dropOptions?: DropTriggerOptions) => string;
export declare function dropTrigger(mOptions: MigrationOptions): DropTrigger;
