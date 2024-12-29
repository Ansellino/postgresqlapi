import type { MigrationOptions } from '../../types';
import type { IfNotExistsOption, Name, Value } from '../generalTypes';
export interface AddTypeValueOptions extends IfNotExistsOption {
    before?: string;
    after?: string;
}
export type AddTypeValue = (typeName: Name, value: Value, typeValueOptions?: AddTypeValueOptions) => string;
export declare function addTypeValue(mOptions: MigrationOptions): AddTypeValue;
