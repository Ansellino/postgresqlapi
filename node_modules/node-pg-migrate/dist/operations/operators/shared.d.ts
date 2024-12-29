import type { MigrationOptions } from '../../types';
import type { FunctionParam } from '../functions';
import type { Name } from '../generalTypes';
export interface OperatorListDefinition {
    type: 'function' | 'operator';
    number: number;
    name: Name;
    params?: FunctionParam[];
}
export declare function operatorMap(mOptions: MigrationOptions): ({ type, number, name, params }: OperatorListDefinition) => string;
