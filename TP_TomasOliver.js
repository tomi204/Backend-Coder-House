class ProductManager {
  constructor() {
    this.products = [];
    this.filePath = filePath;
  }
  itemCount() {
    return this.products.length;
  }

  removeProduct(product) {
    this.products = this.products.filter((p) => p !== product);
  }

  lookUpProduct(id) {
    return this.products.find((product) => product.id === id);
  }

  createProduct(price, tittle, stock, description, image) {
    if (!tittle || !price || !image || !stock || !description) {
      throw new Error("error todos los campos son requeridos");
    }

    const product = {
      tittle: tittle,
      stock: stock,
      id: this.itemCount() + 1,
      description: description,
      image: image,
      price: price,
    };
    this.products.push(product);
    return product;
  }

  findProduct(name) {
    return this.products.find((product) => product.name === name);
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

  async getUser(id) {
    let users = await this.getUsers();
    return users.find((user) => user.id == id);
  }
}
