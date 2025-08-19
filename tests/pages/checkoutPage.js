class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[name="framelive"]');
  }

  async proceedAsGuest() {
    await this.frame.getByRole('link', { name: 'Proceed to checkout' }).click();
  }

  async fillPersonalInfo(details) {
    await this.frame.getByRole('radio', { name: 'Mr.' }).check();
    await this.frame.getByRole('textbox', { name: 'First name' }).fill(details.firstName);
    await this.frame.getByRole('textbox', { name: 'Last name' }).fill(details.lastName);
    await this.frame.getByRole('textbox', { name: 'Email Email' }).fill(details.email);
    await this.frame.getByRole('textbox', { name: 'Birthdate' }).fill(details.birthdate);
    await this.frame.getByRole('button', { name: 'Continue' }).click();
  }
}

module.exports = CheckoutPage;