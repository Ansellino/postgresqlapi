import type { MigrationOptions } from '../../types';
import type { DropOptions } from '../generalTypes';
import type { StringExtension } from './shared';
export type DropExtensionOptions = DropOptions;
export type DropExtension = (extension: StringExtension | StringExtension[], dropOptions?: DropExtensionOptions) => string | string[];
export declare function dropExtension(mOptions: MigrationOptions): DropExtension;
