import type { Type } from '../generalTypes';
import type { ColumnDefinitions } from '../tables';
export interface SequenceOptions {
    type?: Type;
    increment?: number;
    minvalue?: number | null | false;
    maxvalue?: number | null | false;
    start?: number;
    cache?: number;
    cycle?: boolean;
    owner?: string | null | false;
}
export declare function parseSequenceOptions(typeShorthands: ColumnDefinitions | undefined, options: SequenceOptions): string[];
