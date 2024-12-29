import type { Nullable } from '../generalTypes';
export type ViewOptions = {
    [key: string]: boolean | number | string;
};
export declare function viewOptionStr<TViewOptions extends Nullable<ViewOptions>, TKey extends keyof TViewOptions>(options: TViewOptions): (key: TKey) => string;
