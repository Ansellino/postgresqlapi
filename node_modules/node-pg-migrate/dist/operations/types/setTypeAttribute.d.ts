import type { MigrationOptions } from '../../types';
import type { Name, Type } from '../generalTypes';
export type SetTypeAttribute = (typeName: Name, attributeName: string, attributeType: Type) => string;
export declare function setTypeAttribute(mOptions: MigrationOptions): SetTypeAttribute;
