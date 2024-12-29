import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export interface RefreshMaterializedViewOptions {
    concurrently?: boolean;
    data?: boolean;
}
export type RefreshMaterializedViewFn = (viewName: Name, materializedViewOptions?: RefreshMaterializedViewOptions) => string;
export type RefreshMaterializedView = Reversible<RefreshMaterializedViewFn>;
export declare function refreshMaterializedView(mOptions: MigrationOptions): RefreshMaterializedView;
