import type { Value } from '../generalTypes';
export interface RoleOptions {
    superuser?: boolean;
    createdb?: boolean;
    createrole?: boolean;
    inherit?: boolean;
    login?: boolean;
    replication?: boolean;
    bypassrls?: boolean;
    limit?: number;
    password?: Value;
    encrypted?: boolean;
    valid?: Value;
    inRole?: string | string[];
    role?: string | string[];
    admin?: string | string[];
}
export declare function formatRoleOptions(roleOptions?: RoleOptions): string;
