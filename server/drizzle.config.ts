import 'dotenv/config';

import type { Config } from 'drizzle-kit';

import { getDatabaseUrl } from './src/common/utils/envConfig';
const databaseUrl = getDatabaseUrl();

export default {
  schema: './src/database/schema.ts',
  driver: 'pg',
  out: './drizzle',
  dbCredentials: {
    connectionString: databaseUrl,
  },
} satisfies Config;
