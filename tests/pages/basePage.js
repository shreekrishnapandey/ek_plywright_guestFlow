class BasePage {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[name="framelive"]');
  }

  async navigateTo() {
    await this.page.goto('https://demo.prestashop.com/#/en/front');
  }

  async fillField(label, value) {
    const field = this.frame.getByRole('textbox', { name: label });
    await field.click();
    await field.fill(value);
  }
}
export default BasePage;
module.exports = BasePage;