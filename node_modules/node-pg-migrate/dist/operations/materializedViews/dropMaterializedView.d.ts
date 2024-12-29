import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export type DropMaterializedViewOptions = DropOptions;
export type DropMaterializedView = (viewName: Name, dropOptions?: DropMaterializedViewOptions) => string;
export declare function dropMaterializedView(mOptions: MigrationOptions): DropMaterializedView;
