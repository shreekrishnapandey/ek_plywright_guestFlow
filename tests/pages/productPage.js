class ProductPage {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[name="framelive"]');
  }

  async selectSize(size) {
    await this.frame.getByLabel('Size').selectOption(size);
  }

  async addToCart() {
    await this.frame.getByRole('button', { name: 'Add to cart' }).click();
  }
}

module.exports = ProductPage;