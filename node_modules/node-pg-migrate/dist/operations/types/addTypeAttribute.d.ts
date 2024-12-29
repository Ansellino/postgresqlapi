import type { MigrationOptions } from '../../types';
import type { Name, Reversible, Type } from '../generalTypes';
import type { DropTypeAttributeOptions } from './dropTypeAttribute';
export type AddTypeAttributeFn = (typeName: Name, attributeName: string, attributeType: Type & DropTypeAttributeOptions) => string;
export type AddTypeAttribute = Reversible<AddTypeAttributeFn>;
export declare function addTypeAttribute(mOptions: MigrationOptions): AddTypeAttribute;
