// drizzle.mock.ts
import { DeepMockProxy, mockDeep, mockReset } from 'jest-mock-extended';

import { db } from './drizzleConnection';

const drizzleMock: DeepMockProxy<typeof db> = mockDeep();

jest.mock('../index.ts', () => ({
  __esModule: true,
  ...jest.requireActual('../index'),
  default: drizzleMock,
}));

beforeEach(() => {
  mockReset(drizzleMock);
});

export default drizzleMock;
