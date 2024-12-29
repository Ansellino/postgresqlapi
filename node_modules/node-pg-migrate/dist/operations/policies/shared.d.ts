export interface PolicyOptions {
    role?: string | string[];
    using?: string;
    check?: string;
}
export declare function makeClauses({ role, using, check }: PolicyOptions): string[];
