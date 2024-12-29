import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameTriggerFn = (tableName: Name, oldTriggerName: string, newTriggerName: string) => string;
export type RenameTrigger = Reversible<RenameTriggerFn>;
export declare function renameTrigger(mOptions: MigrationOptions): RenameTrigger;
