import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export type DropSequenceOptions = DropOptions;
export type DropSequence = (sequenceName: Name, dropOptions?: DropSequenceOptions) => string;
export declare function dropSequence(mOptions: MigrationOptions): DropSequence;
