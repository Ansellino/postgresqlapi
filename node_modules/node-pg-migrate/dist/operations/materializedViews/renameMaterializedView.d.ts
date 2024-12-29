import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameMaterializedViewFn = (viewName: Name, newViewName: Name) => string;
export type RenameMaterializedView = Reversible<RenameMaterializedViewFn>;
export declare function renameMaterializedView(mOptions: MigrationOptions): RenameMaterializedView;
