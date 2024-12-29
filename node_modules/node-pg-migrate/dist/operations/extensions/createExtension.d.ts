import type { MigrationOptions } from '../../types';
import type { IfNotExistsOption, Reversible } from '../generalTypes';
import type { DropExtensionOptions } from './dropExtension';
import type { StringExtension } from './shared';
export interface CreateExtensionOptions extends IfNotExistsOption {
    schema?: string;
}
export type CreateExtensionFn = (extension: StringExtension | StringExtension[], extensionOptions?: CreateExtensionOptions & DropExtensionOptions) => string | string[];
export type CreateExtension = Reversible<CreateExtensionFn>;
export declare function createExtension(mOptions: MigrationOptions): CreateExtension;
