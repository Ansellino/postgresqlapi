import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameTypeFn = (typeName: Name, newTypeName: Name) => string;
export type RenameType = Reversible<RenameTypeFn>;
export declare function renameType(mOptions: MigrationOptions): RenameType;
