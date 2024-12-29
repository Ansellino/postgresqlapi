import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameViewFn = (viewName: Name, newViewName: Name) => string;
export type RenameView = Reversible<RenameViewFn>;
export declare function renameView(mOptions: MigrationOptions): RenameView;
