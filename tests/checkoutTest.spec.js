// tests/checkoutTest.spec.js
const { test, expect } = require('@playwright/test');
const HomePage = require('./pages/homePage');
const ProductPage = require('./pages/productPage');
const CartPage = require('./pages/cartPage');
const CheckoutPage = require('./pages/checkoutPage');
const AddressPage = require('./pages/addressPage');

test('Complete PrestaShop checkout as guest', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const addressPage = new AddressPage(page);

  await homePage.navigate();
  await homePage.selectProduct('Hummingbird printed sweater');
  
  await productPage.selectSize('4');
  await productPage.addToCart();
  
  await cartPage.proceedToCheckout();
  
  await checkoutPage.proceedAsGuest();
  
  await checkoutPage.fillPersonalInfo({
    firstName: 'Shree',
    lastName: 'Pandey',
    email: 'shrikrishna.pandey1@gmail.com',
    birthdate: '05/07/1996',
  });
  await addressPage.agreeToTerms();
  
  await addressPage.fillAddress({
    address: 'Jadibutti',
    city: 'Kathmandu',
    zipCode: '45890',
    state: '2'
  });
  
  await addressPage.addComment('Thankyou');
  
});