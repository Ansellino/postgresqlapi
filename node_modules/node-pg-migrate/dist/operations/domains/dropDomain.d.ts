import type { MigrationOptions } from '../../types';
import type { DropOptions, Name } from '../generalTypes';
export type DropDomainOptions = DropOptions;
export type DropDomain = (domainName: Name, dropOptions?: DropDomainOptions) => string;
export declare function dropDomain(mOptions: MigrationOptions): DropDomain;
