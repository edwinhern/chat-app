import { migrate } from 'drizzle-orm/postgres-js/migrator';

import { logger } from '@src/server';

import { db } from './drizzleConnection';

export const migrateDB = async () => {
  logger.child({ module: 'migrateDB' }).info('migrating db');
  await migrate(db, { migrationsFolder: 'drizzle' });
  logger.child({ module: 'migrateDB' }).info('db migrated');
};

migrateDB();
