import type { MigrationOptions } from '../../types';
import type { Name, Nullable } from '../generalTypes';
import type { StorageParameters } from './shared';
export interface AlterMaterializedViewOptions {
    cluster?: null | false | string;
    extension?: string;
    storageParameters?: Nullable<StorageParameters>;
}
export type AlterMaterializedView = (viewName: Name, materializedViewOptions: AlterMaterializedViewOptions) => string;
export declare function alterMaterializedView(mOptions: MigrationOptions): AlterMaterializedView;
