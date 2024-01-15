import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { pgTable, serial, text, timestamp, unique, varchar } from 'drizzle-orm/pg-core';

export const UserTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    username: text('username'),
    email: varchar('email'),
    created_at: timestamp('created_at').defaultNow(),
  },
  (table) => ({
    unique_username: unique('unique_username').on(table.id, table.username),
    unique_email: unique('unique_email').on(table.id, table.email),
  })
);

export type User = InferSelectModel<typeof UserTable>;
export type newUser = InferInsertModel<typeof UserTable>;
