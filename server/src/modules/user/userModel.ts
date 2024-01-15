import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text, timestamp, unique, varchar } from 'drizzle-orm/pg-core';

export const UserTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    username: text('username'),
    email: varchar('email'),
    createdAt: timestamp('createdAt').defaultNow(),
  },
  (table) => ({
    uniqueUsername: unique('uniqueUsername').on(table.id, table.username),
    uniqueEmail: unique('uniqueEmail').on(table.id, table.email),
  })
);

export type User = InferSelectModel<typeof UserTable>;
export type NewUser = InferInsertModel<typeof UserTable>;
