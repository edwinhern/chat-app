import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

import { ChatRoomTable, UserTable } from '@database/schema';

export const MessageTable = pgTable('messages', {
  id: serial('id').primaryKey(),
  chatRoomId: integer('chatRoomId').references(() => ChatRoomTable.id),
  senderId: integer('senderId').references(() => UserTable.id),
  message: text('message'),
  createdAt: timestamp('createdAt').defaultNow(),
});

export type Message = InferSelectModel<typeof MessageTable>;
export type NewMessage = InferInsertModel<typeof MessageTable>;
