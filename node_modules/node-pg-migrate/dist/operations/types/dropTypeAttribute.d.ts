import type { MigrationOptions } from '../../types';
import type { IfExistsOption, Name } from '../generalTypes';
export type DropTypeAttributeOptions = IfExistsOption;
export type DropTypeAttribute = (typeName: Name, attributeName: string, dropOptions?: DropTypeAttributeOptions) => string;
export declare function dropTypeAttribute(mOptions: MigrationOptions): DropTypeAttribute;
