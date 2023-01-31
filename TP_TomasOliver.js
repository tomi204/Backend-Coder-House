class ProductManager {
  constructor() {
    this.products = [];
  }
  itemCount() {
    return this.products.length;
  }

  removeProduct(product) {
    this.products = this.products.filter((p) => p !== product);
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
}
