import type { RunMigration } from './migration';
import type { RunnerOption } from './types';
export declare function runner(options: RunnerOption): Promise<RunMigration[]>;
export default runner;
