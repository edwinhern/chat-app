import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';

import { ChatRoomTable, UserTable } from '@database/schema';

export const ChatRoomMappingTable = pgTable('chatRoomMappings', {
  id: serial('id').primaryKey(),
  userId: integer('userId').references(() => UserTable.id),
  chatRoomId: integer('chatRoomId').references(() => ChatRoomTable.id),
  joinedAt: timestamp('joinedAt').defaultNow(),
});

export type ChatRoomMapping = InferSelectModel<typeof ChatRoomMappingTable>;
export type NewChatRoomMapping = InferInsertModel<typeof ChatRoomMappingTable>;
