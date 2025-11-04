import Calculator from '../../src/calculator.js';
import UserService from '../../src/userService.js';

console.log('🧪 Loading Integration Tests...');

describe('Application Integration Tests', () => {
  let calculator;
  let userService;

  beforeEach(() => {
    calculator = new Calculator();
    userService = new UserService();
    console.log('  🔧 Setting up Calculator and UserService instances');
  });

  describe('Calculator and UserService Integration', () => {
    it('should handle complex user operations with calculations', () => {
      console.log('    🔄 Testing user operations with calculations');
      // Add users
      const user1 = { id: 1, name: 'Alice', age: 25 };
      const user2 = { id: 2, name: 'Bob', age: 30 };
      
      userService.addUser({ ...user1, email: 'alice@example.com' });
      userService.addUser({ ...user2, email: 'bob@example.com' });

      // Perform calculations based on user data
      const totalAge = calculator.add(user1.age, user2.age);
      const ageDifference = calculator.subtract(user2.age, user1.age);

      expect(totalAge).toBe(55);
      expect(ageDifference).toBe(5);
      expect(userService.getAllUsers().length).toBe(2);
    });

    it('should calculate average user age', () => {
      console.log('    📊 Testing average age calculation');
      const users = [
        { id: 1, name: 'User1', age: 20, email: 'user1@test.com' },
        { id: 2, name: 'User2', age: 30, email: 'user2@test.com' },
        { id: 3, name: 'User3', age: 40, email: 'user3@test.com' }
      ];

      users.forEach(user => userService.addUser(user));

      const totalAge = users.reduce((sum, user) => calculator.add(sum, user.age), 0);
      const averageAge = calculator.divide(totalAge, users.length);

      expect(averageAge).toBe(30);
      expect(userService.getAllUsers().length).toBe(3);
    });

    it('should handle user lifecycle with calculations', () => {
      console.log('    🔄 Testing complete user lifecycle');
      // Add initial user
      const user = { id: 1, name: 'Test User', age: 100, email: 'test@example.com' };
      userService.addUser(user);
      
      // Verify user exists
      expect(userService.getUserById(1)).toEqual(user);
      
      // Perform calculation based on user data
      const doubledAge = calculator.multiply(user.age, 2);
      expect(doubledAge).toBe(200);
      
      // Delete user and verify
      const deletedUser = userService.deleteUser(1);
      expect(deletedUser).toEqual(user);
      expect(userService.getAllUsers().length).toBe(0);
    });
  });
});

console.log('✅ Integration Tests loaded successfully!');