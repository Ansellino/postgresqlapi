import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameSequenceFn = (oldSequenceName: Name, newSequenceName: Name) => string;
export type RenameSequence = Reversible<RenameSequenceFn>;
export declare function renameSequence(mOptions: MigrationOptions): RenameSequence;
