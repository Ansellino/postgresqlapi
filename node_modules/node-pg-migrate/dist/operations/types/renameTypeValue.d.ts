import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameTypeValueFn = (typeName: Name, value: string, newValue: string) => string;
export type RenameTypeValue = Reversible<RenameTypeValueFn>;
export declare function renameTypeValue(mOptions: MigrationOptions): RenameTypeValue;
