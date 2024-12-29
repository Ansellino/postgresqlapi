import type { MigrationOptions } from '../../types';
import type { Name } from '../generalTypes';
import type { DomainOptions } from './shared';
export interface AlterDomainOptions extends DomainOptions {
    allowNull?: boolean;
}
export type AlterDomain = (domainName: Name, domainOptions: AlterDomainOptions) => string;
export declare function alterDomain(mOptions: MigrationOptions): AlterDomain;
