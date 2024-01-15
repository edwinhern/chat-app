import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

import { getDatabaseUrl } from '@common/utils/envConfig';
import * as schema from '@src/database/schema';

const connectionString = getDatabaseUrl();
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });
