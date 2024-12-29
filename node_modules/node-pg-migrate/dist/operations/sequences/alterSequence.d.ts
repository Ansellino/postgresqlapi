import type { MigrationOptions } from '../../types';
import type { Name } from '../generalTypes';
import type { SequenceOptions } from './shared';
export interface AlterSequenceOptions extends SequenceOptions {
    restart?: number | true;
}
export type AlterSequence = (sequenceName: Name, sequenceOptions: AlterSequenceOptions) => string;
export declare function alterSequence(mOptions: MigrationOptions): AlterSequence;
