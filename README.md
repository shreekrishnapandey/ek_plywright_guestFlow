# ek_plywright_guestFlow
This project includes guest flow through shopping in prestaShop website.
# Project Name - Playwright Automation of Shopping cart as a guest user.
# Install Dependencies
npm install
# Install browsers
npx playwright install
# EXECUTION
npx playwright test --headed //Execution in browser UI
npx playwright test tests/checkoutTest.spec.js //Execute specific file
# GENERATE HTML REPORT
npx playwright test --reporter=html

npx playwright show-report
# REPORTING
 1. HTML reports generated in playwright-report/
 2. Screenshots on failure stored in test-results/
http://localhost:9323/ //immediately open after test.
# Project structure
<img width="169" height="513" alt="image" src="https://github.com/user-attachments/assets/ba44f270-5146-4eb6-8440-078f7e64aeee" />


