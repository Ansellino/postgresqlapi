import type { FunctionParamType } from '../operations/functions';
import type { Type } from '../operations/generalTypes';
import type { ColumnDefinition, ColumnDefinitions } from '../operations/tables';
export declare function applyTypeAdapters(type: string): string;
export declare function applyType(type: Readonly<Type>, extendingTypeShorthands?: Readonly<ColumnDefinitions>): ColumnDefinition & FunctionParamType;
