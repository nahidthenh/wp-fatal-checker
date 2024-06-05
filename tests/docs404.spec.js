const { test, expect } = require('@playwright/test');
const { urls } = require('../utils/docs/wpdeveloper-docs-list');


test('Searching 404 Page...', async ({ page }) => {
    test.setTimeout(0);
    for (const url of urls) {
        await page.goto(url)
        const errorMessage = await page.getByText('Oops! That page can’t be found.').isVisible();

        if (errorMessage) {
            console.log(`❌ Page Not Found - ${url}`);
        } else {
            console.log(`✅ Page Found - ${url}`);
        }
    }


})