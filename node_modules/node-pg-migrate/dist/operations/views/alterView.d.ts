import type { MigrationOptions } from '../../types';
import type { Name, Nullable } from '../generalTypes';
import type { ViewOptions } from './shared';
export interface AlterViewOptions {
    checkOption?: null | 'CASCADED' | 'LOCAL';
    options?: Nullable<ViewOptions>;
}
export type AlterView = (viewName: Name, viewOptions: AlterViewOptions) => string;
export declare function alterView(mOptions: MigrationOptions): AlterView;
