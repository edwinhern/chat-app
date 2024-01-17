import { eq } from 'drizzle-orm';

import { ServiceResponse } from '@common/models/serviceResponse';
import { isEmpty } from '@common/utils/arrayUtils';
import { db } from '@database/drizzleConnection';
import { User, UserTable } from '@modules/user/userModel';
import { logger } from '@src/server';

export const userService = {
  // Retrieves all users from the database
  findAll: async (): Promise<ServiceResponse<User[] | null>> => {
    try {
      const users = await db.select().from(UserTable);
      return new ServiceResponse<User[]>(true, 'Users found.', users);
    } catch (ex) {
      logger.error(ex);
      return new ServiceResponse<User[]>(false, 'Error finding all users.', [], ex);
    }
  },

  // Retrieves a single user by their ID
  findById: async (id: number): Promise<ServiceResponse<User | null>> => {
    try {
      const user: User[] = await db.select().from(UserTable).where(eq(UserTable.id, id));
      if (isEmpty(user)) {
        return new ServiceResponse<User>(false, 'User not found.', null);
      }
      return new ServiceResponse<User>(true, 'User found.', user[0] as User);
    } catch (ex) {
      logger.error(`Error finding user with id ${id}:`, ex);
      return new ServiceResponse<User>(false, 'Error finding user.', null, ex);
    }
  },
};
