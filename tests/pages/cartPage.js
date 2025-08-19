const BasePage = require('./basePage');  // ✅ Correct relative path

class CartPage extends BasePage {
  async proceedToCheckout() {
    await this.frame.getByRole('link', { name: 'Proceed to checkout' }).click();
  }
/*  async proceedToCheckout() {
    const checkLink = this.frame.getByRole('link', { 
      name: 'Proceed to checkout'});
        await checkLink.waitFor({ state: 'visible' });
         await checkLink.click();
   
  }*/
}

module.exports = CartPage;