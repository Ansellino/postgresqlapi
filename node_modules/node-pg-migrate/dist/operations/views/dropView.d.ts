import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export type DropViewOptions = DropOptions;
export type DropView = (viewName: Name, dropOptions?: DropViewOptions) => string;
export declare function dropView(mOptions: MigrationOptions): DropView;
