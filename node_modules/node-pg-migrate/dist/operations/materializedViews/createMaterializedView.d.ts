import type { MigrationOptions } from '../../types';
import type { IfNotExistsOption, Name, Reversible } from '../generalTypes';
import type { DropMaterializedViewOptions } from './dropMaterializedView';
import type { StorageParameters } from './shared';
export interface CreateMaterializedViewOptions extends IfNotExistsOption {
    columns?: string | string[];
    tablespace?: string;
    storageParameters?: StorageParameters;
    data?: boolean;
}
export type CreateMaterializedViewFn = (viewName: Name, materializedViewOptions: CreateMaterializedViewOptions & DropMaterializedViewOptions, definition: string) => string;
export type CreateMaterializedView = Reversible<CreateMaterializedViewFn>;
export declare function createMaterializedView(mOptions: MigrationOptions): CreateMaterializedView;
