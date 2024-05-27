// @ts-check
const { test, expect } = require('@playwright/test');

const urls = [
  'https://embedpress.qcheck.site/',
  'https://embedpress.qcheck.site/gutenberg-youtube/',
  'https://embedpress.qcheck.site/classic-youtube/',
  'https://embedpress.qcheck.site/elementor-youtube/',
  'https://embedpress.qcheck.site/wp-admin/',
  // 'https://embedpress.qcheck.site/classic-singles/'

  // Add more URLs to this list
];

test('Check for Fatal Error on EmbedPress', async ({ page }) => {
  for (const url of urls) {
    await page.goto(url);

    // Check for the fatal error message
    const error = await page.getByText('Fatal error:').isVisible();

    if (error) {
      console.log(`URL: ${url} - Fatal Error`);
    } else {
      console.log(`URL: ${url} - Page loaded properly`);
    }
  }
});
