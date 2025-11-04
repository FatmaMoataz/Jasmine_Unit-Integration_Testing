import UserService from '../../src/userService.js';

console.log('🧪 Loading UserService Unit Tests...');

describe('UserService - Unit Tests', () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
    console.log('  🔧 Setting up UserService instance');
  });

  describe('addUser method', () => {
    it('should add a user with valid data', () => {
      console.log('    👤 Testing user addition with valid data');
      const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
      const result = userService.addUser(user);
      
      expect(result).toEqual(user);
      expect(userService.getAllUsers()).toContain(user);
    });

    it('should throw error when user missing name or email', () => {
      console.log('    ❌ Testing user addition validation');
      expect(() => userService.addUser({ id: 1 })).toThrowError('User must have name and email');
    });
  });

  describe('getUserById method', () => {
    it('should return user by id', () => {
      console.log('    🔍 Testing user retrieval by ID');
      const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
      userService.addUser(user);
      
      expect(userService.getUserById(1)).toEqual(user);
    });

    it('should return undefined for non-existent user', () => {
      console.log('    🔍 Testing non-existent user retrieval');
      expect(userService.getUserById(999)).toBeUndefined();
    });
  });

  describe('deleteUser method', () => {
    it('should delete existing user', () => {
      console.log('    🗑️ Testing user deletion');
      const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
      userService.addUser(user);
      
      const deletedUser = userService.deleteUser(1);
      expect(deletedUser).toEqual(user);
      expect(userService.getAllUsers()).not.toContain(user);
    });

    it('should throw error when deleting non-existent user', () => {
      console.log('    ❌ Testing deletion of non-existent user');
      expect(() => userService.deleteUser(999)).toThrowError('User not found');
    });
  });
});

console.log('✅ UserService Unit Tests loaded successfully!');