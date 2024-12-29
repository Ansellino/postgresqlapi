import type { MigrationOptions } from '../types';
import type { Name, Value } from './generalTypes';
export type Sql = (sqlStr: string, args?: {
    [key: string]: Name | Value;
}) => string;
export declare function sql(mOptions: MigrationOptions): Sql;
