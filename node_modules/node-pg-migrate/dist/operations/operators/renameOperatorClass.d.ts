import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameOperatorClassFn = (oldOperatorClassName: Name, indexMethod: Name, newOperatorClassName: Name) => string;
export type RenameOperatorClass = Reversible<RenameOperatorClassFn>;
export declare function renameOperatorClass(mOptions: MigrationOptions): RenameOperatorClass;
