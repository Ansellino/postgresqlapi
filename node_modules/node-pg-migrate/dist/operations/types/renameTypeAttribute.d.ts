import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameTypeAttributeFn = (typeName: Name, attributeName: string, newAttributeName: string) => string;
export type RenameTypeAttribute = Reversible<RenameTypeAttributeFn>;
export declare function renameTypeAttribute(mOptions: MigrationOptions): RenameTypeAttribute;
