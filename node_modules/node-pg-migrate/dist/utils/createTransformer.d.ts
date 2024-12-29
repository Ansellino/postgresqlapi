import type { Name, Value } from '../operations/generalTypes';
import type { Literal } from '../types';
export declare function createTransformer(literal: Literal): (statement: string, mapping?: {
    [key: string]: Name | Value;
}) => string;
