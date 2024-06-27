const { test, expect } = require('@wordpress/e2e-test-utils-playwright');
const { urls } = require('../utils/urls/essential_addons');

test('Check for Error on Essential Addons For Elementor', async ({ page }) => {
    // Disables the timeout
    test.setTimeout(0);

    // Regular expression to match PHP error messages
    const REGEXP_PHP_ERROR = /(<b>)?(Fatal error|Recoverable fatal error|Warning|Parse error|Notice|Strict Standards|Deprecated|Unknown error)(<\/b>)?: (.*?) in (.*?) on line (<b>)?\d+(<\/b>)?/g;

    for (const url of urls) {
        await page.goto(url);

        // Check for visible fatal error messages
        const fatalError1 = await page.getByText('Fatal error:').isVisible().catch(() => false);
        const fatalError2 = await page.getByText('There has been a critical error on this website.').isVisible().catch(() => false);

        // Get the page content
        const pageContent = await page.content();

        // Check for the fatal error messages using the regex
        const matches = pageContent.matchAll(REGEXP_PHP_ERROR);

        // Collect all errors
        let errorMessages = [];
        for (const match of matches) {
            errorMessages.push(match[0]);
        }

        if (errorMessages.length > 0 || fatalError1 || fatalError2) {
            console.log(`❌ Found Errors on ${url}:\n${errorMessages.join('\n')}`);
        } else {
            console.log(`✅ Page loaded properly - ${url}`);
        }
    }
});
