import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

import { UserTable } from '@database/schema';

export const ChatRoomTable = pgTable('chatRooms', {
  id: serial('id').primaryKey(),
  name: text('name'),
  createdBy: integer('createdBy').references(() => UserTable.id),
  createdAt: timestamp('createdAt').defaultNow(),
});

export type ChatRoom = InferSelectModel<typeof ChatRoomTable>;
export type NewChatRoom = InferInsertModel<typeof ChatRoomTable>;
