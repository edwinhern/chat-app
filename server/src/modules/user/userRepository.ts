import { eq } from 'drizzle-orm';

import { db } from '@database/drizzleConnection';
import { User, UserTable } from '@modules/user/userModel';

export interface IUserRepository {
  findAllAsync(): Promise<User[]>;
  findByIdAsync(id: number): Promise<User[]>;
}

export class UserRepository implements IUserRepository {
  public async findAllAsync() {
    return await db.select().from(UserTable);
  }

  public async findByIdAsync(id: number) {
    return await db.select().from(UserTable).where(eq(UserTable.id, id));
  }
}
