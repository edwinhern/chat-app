import drizzleMock from '@database/drizzle.mock';
import { userService } from '@modules/user/userService';

// When I run the test, it calls the actual Drizzle connection rather than mocking
describe('userService', () => {
  describe('findAll', () => {
    it('should return all users on success', async () => {
      const mockUsers = [{ id: 1, username: 'testuser', email: 'hello@aol.com', createdAt: new Date() }];

      drizzleMock.query.UserTable.findFirst.mockResolvedValue(mockUsers as any);

      const response = await userService.findAll();

      //   expect(drizzleMock.query.UserTable.findFirst).toHaveBeenCalledTimes(1);
      expect(response.success).toBeTruthy();
      expect(response.responseObject).toEqual(mockUsers);
    });
  });
});
