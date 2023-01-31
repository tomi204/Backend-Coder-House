class UserManager {
  constructor(filePath) {
    this.filePath = filePath;
  }

  async saveUser(user) {
    let users = await this.getUsers();
    users.push(user);
    await fs.writeFile(this.filePath, JSON.stringify(users));
  }

  async getUsers() {
    try {
      let data = await fs.readFile(this.filePath, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }
}
