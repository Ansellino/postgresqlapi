import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
import type { DropViewOptions } from './dropView';
import type { ViewOptions } from './shared';
export interface CreateViewOptions {
    temporary?: boolean;
    replace?: boolean;
    recursive?: boolean;
    columns?: string | string[];
    checkOption?: 'CASCADED' | 'LOCAL';
    options?: ViewOptions;
}
export type CreateViewFn = (viewName: Name, options: CreateViewOptions & DropViewOptions, definition: string) => string;
export type CreateView = Reversible<CreateViewFn>;
export declare function createView(mOptions: MigrationOptions): CreateView;
