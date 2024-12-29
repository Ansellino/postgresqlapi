import type { MigrationOptions } from '../../types';
import type { Name, Reversible } from '../generalTypes';
export type RenameDomainFn = (oldDomainName: Name, newDomainName: Name) => string;
export type RenameDomain = Reversible<RenameDomainFn>;
export declare function renameDomain(mOptions: MigrationOptions): RenameDomain;
