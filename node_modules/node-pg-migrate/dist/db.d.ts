import type { ClientBase, ClientConfig, QueryArrayConfig, QueryConfig } from 'pg';
import type { DB, Logger } from './types';
export interface DBConnection extends DB {
    createConnection(): Promise<void>;
    column(columnName: string, queryConfig: QueryArrayConfig, values?: any[]): Promise<any[]>;
    column(columnName: string, queryConfig: QueryConfig): Promise<any[]>;
    column(columnName: string, queryTextOrConfig: string | QueryConfig, values?: any[]): Promise<any[]>;
    connected: () => boolean;
    addBeforeCloseListener: (listener: any) => number;
    close(): Promise<void>;
}
declare function db(connection: ClientBase | string | ClientConfig, logger?: Logger): DBConnection;
export default db;
