class AddressPage {
  constructor(page) {
    this.page = page;
    this.frame = page.frameLocator('iframe[name="framelive"]');
  }

  async waitForFrameReady() {
    // Wait for iframe to be attached to DOM
    await this.page.locator('iframe[name="framelive"]').waitFor({ state: 'attached' });
    
    // Wait for iframe body to be loaded
    const frameHandle = await this.page.$('iframe[name="framelive"]');
    const frame = await frameHandle.contentFrame();
    await frame.waitForSelector('body');
  }

  async fillAddress(addressDetails) {
    try {
      await this.waitForFrameReady();

      // Address field with explicit waiting
      const addressInput = this.frame.locator('input[name="address1"]');
      await addressInput.waitFor({ state: 'visible', timeout: 15000 });
      await addressInput.fill(addressDetails.address);

      // City field
      await this.frame.locator('input[name="city"]').fill(addressDetails.city);

      // Zip Code field
      await this.frame.locator('input[name="postcode"]').fill(addressDetails.zipCode);

      // State dropdown with extra waiting
      const stateSelect = this.frame.locator('select[name="id_state"]');
      await stateSelect.waitFor({ state: 'visible' });
      await stateSelect.selectOption(addressDetails.state);

      // Continue button with click retry
      const continueBtn = this.frame.locator('button[name="confirm-addresses"]');
      await continueBtn.waitFor({ state: 'visible' });
      await continueBtn.click({ timeout: 10000 });

    } catch (error) {
      console.error('Address filling failed:', error);
      await this.page.screenshot({ path: 'address-error.png' });
      throw error;
    }
  }



async agreeToTerms() {
const checkbox = this.frame.getByLabel('I agree to the terms and conditions'); // Adjust label text accordingly
  await checkbox.waitFor({ state: 'visible' });
  await checkbox.check();
  const checkbox2 = this.frame.getByLabel('Customer data privacy');
  await checkbox2.waitFor({ state: 'visible' });
  await checkbox2.check();
  await this.frame.getByRole('button', { name: 'Continue' }).click();

 
}
async addComment(comment) {
    const commentField = this.frame.getByRole('textbox', { name: 'Comment' });
    await commentField.waitFor({ state: 'visible' });
    await commentField.fill(comment);
    await this.frame.getByRole('button', { name: 'Continue' }).click();
  }

}

module.exports = AddressPage;