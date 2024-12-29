import type { MigrationOptions } from '../../types';
import type { Name, Reversible, Type } from '../generalTypes';
import type { DropDomainOptions } from './dropDomain';
import type { DomainOptions } from './shared';
export interface CreateDomainOptions extends DomainOptions {
    collation?: string;
}
export type CreateDomainFn = (domainName: Name, type: Type, domainOptions?: CreateDomainOptions & DropDomainOptions) => string;
export type CreateDomain = Reversible<CreateDomainFn>;
export declare function createDomain(mOptions: MigrationOptions): CreateDomain;
