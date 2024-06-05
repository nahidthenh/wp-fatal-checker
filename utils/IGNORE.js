const { test, expect } = require('@wordpress/e2e-test-utils-playwright');
const { urls } = require('./urls/essential_addons');

test('Essential Addons PHP Error Check', async ({ page, admin }) => {
    // Disables the timeout
    test.setTimeout(0);
    
    for (const url of urls) {
        await page.goto(url);
        let error = await admin.getPageError();

        if (error) {
            console.log(`❌ Found Error - ${error} - ${url}`);
        } else {
            console.log(`✅ Page loaded properly - ${url}`);
        }
    }
});