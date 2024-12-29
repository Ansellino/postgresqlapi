import type { MigrationOptions } from '../../types';
import type { Name, Value } from '../generalTypes';
export interface AlterViewColumnOptions {
    default?: Value;
}
export type AlterViewColumn = (viewName: Name, columnName: string, viewColumnOptions: AlterViewColumnOptions) => string;
export declare function alterViewColumn(mOptions: MigrationOptions): AlterViewColumn;
