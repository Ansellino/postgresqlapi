import type { MigrationBuilderActions } from './types';
export declare function getActions(content: string): MigrationBuilderActions;
declare function sqlMigration(sqlPath: string): Promise<MigrationBuilderActions>;
export default sqlMigration;
