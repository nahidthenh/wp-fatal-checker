const { test, expect } = require('@playwright/test');
const { urls } = require('../utils/urls/embedpress');


test('Check for Fatal Error on EmbedPress', async ({ page }) => {
  // Disables the timeout
  test.setTimeout(0);
  // Regular expression to match PHP error messages
  const REGEXP_PHP_ERROR = /(<b>)?(Fatal error|Recoverable fatal error|Warning|Parse error|Notice|Strict Standards|Deprecated|Unknown error)(<\/b>)?: (.*?) in (.*?) on line (<b>)?\d+(<\/b>)?/;
  for (const url of urls) {
    await page.goto(url);
    // Check for visible fatal error messages
    const fatalError1 = await page.getByText('Fatal error:').isVisible().catch(() => false);
    const fatalError2 = await page.getByText('There has been a critical error on this website.').isVisible().catch(() => false);

    // Get the page content
    const pageContent = await page.content();

    // Check for the fatal error message using the regex
    const matches = pageContent.match(REGEXP_PHP_ERROR);

    if (matches || fatalError1 || fatalError2) {
      console.log(`❌ Found Error - ${url}`);
    } else {
      console.log(`✅ Page loaded properly - ${url}`);
    }
  }
});
