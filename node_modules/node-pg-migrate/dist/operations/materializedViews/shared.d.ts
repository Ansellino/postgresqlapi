import type { Nullable } from '../generalTypes';
export type StorageParameters = {
    [key: string]: boolean | number;
};
export declare function dataClause(data?: boolean): string;
export declare function storageParameterStr<TStorageParameters extends Nullable<StorageParameters>, TKey extends keyof TStorageParameters>(storageParameters: TStorageParameters): (key: TKey) => string;
