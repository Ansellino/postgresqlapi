import type { MigrationOptions } from '../../types';
import type { IfExistsOption } from '../generalTypes';
export type DropCastOptions = IfExistsOption;
export type DropCast = (fromType: string, toType: string, dropOptions?: DropCastOptions) => string;
export declare function dropCast(mOptions: MigrationOptions): DropCast;
