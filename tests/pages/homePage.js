class HomePage {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[name="framelive"]');
  }

  async navigate() {
    await this.page.goto('https://demo.prestashop.com/#/en/front');
  }

  async selectProduct(productName) {
    await this.frame.getByRole('link', { name: productName }).first().click();
  }
}

module.exports = HomePage;