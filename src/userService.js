class UserService {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    if (!user.name || !user.email) {
      throw new Error('User must have name and email');
    }
    this.users.push(user);
    return user;
  }

  getUserById(id) {
    return this.users.find(user => user.id === id);
  }

  getAllUsers() {
    return this.users;
  }

  deleteUser(id) {
    const index = this.users.findIndex(user => user.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    return this.users.splice(index, 1)[0];
  }
}

export default UserService;