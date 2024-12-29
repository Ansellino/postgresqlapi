import type { MigrationOptions } from '../../types';
import type { IfNotExistsOption, Name, Reversible } from '../generalTypes';
import type { DropSequenceOptions } from './dropSequence';
import type { SequenceOptions } from './shared';
export interface CreateSequenceOptions extends SequenceOptions, IfNotExistsOption {
    temporary?: boolean;
}
export type CreateSequenceFn = (sequenceName: Name, sequenceOptions?: CreateSequenceOptions & DropSequenceOptions) => string;
export type CreateSequence = Reversible<CreateSequenceFn>;
export declare function createSequence(mOptions: MigrationOptions): CreateSequence;
