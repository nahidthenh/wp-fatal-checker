const { test, expect } = require('@playwright/test');
const urls = [
  'http://embedpress.local/',
  'http://embedpress.local/1-youtube-singleee/',
  'http://embedpress.local/classic-gumroad/',
  'http://embedpress.local/classic-meetup/',
  'http://embedpress.local/classic-nft/',
  'http://embedpress.local/classic-pdf/',
  'http://embedpress.local/classic-twitch/',
  'http://embedpress.local/classic-apple/',
  'http://embedpress.local/classic-boomplay/',
  'http://embedpress.local/classic-calendly/',
  'http://embedpress.local/classic-facebook/',
  'http://embedpress.local/classic-google/',
  'http://embedpress.local/classic-singles/',
  'http://embedpress.local/classic-spotify/',
  'http://embedpress.local/classic-youtube/',
  'http://embedpress.local/contact/',
  'http://embedpress.local/elementor-gumroad/',
  'http://embedpress.local/elementor-adv-test/',
  'http://embedpress.local/elementor-calendly/',
  'http://embedpress.local/elementor-instra/',
  'http://embedpress.local/elementor-meetup/',
  'http://embedpress.local/elementor-nft/',
  'http://embedpress.local/elementor-nrk-github-gist-acf/',
  'http://embedpress.local/elementor-pdf/',
  'http://embedpress.local/elementor-pdf-test/',
  'http://embedpress.local/elementor-twitch/',
  'http://embedpress.local/elementor-apple/',
  'http://embedpress.local/elementor-boomplay/',
  'http://embedpress.local/elementor-facebook/',
  'http://embedpress.local/elementor-google/',
  'http://embedpress.local/elementor-pdf-2/',
  'http://embedpress.local/elementor-singles/',
  'http://embedpress.local/elementor-spotify/',
  'http://embedpress.local/elementor-youtube/',
  'http://embedpress.local/guntenberg-facebook/',
  'http://embedpress.local/guntenberg-meetup/',
  'http://embedpress.local/guntenberg-pdf/',
  'http://embedpress.local/gutenberg-adv-feature-test/',
  'http://embedpress.local/gutenberg-all-single/',
  'http://embedpress.local/gutenberg-calendly/',
  'http://embedpress.local/gutenberg-calendly-2/',
  'http://embedpress.local/gutenberg-github-gist-nrk-acf/',
  'http://embedpress.local/gutenberg-nft/',
  'http://embedpress.local/gutenberg-opensea-nft/',
  'http://embedpress.local/gutenberg-pdf/',
  'http://embedpress.local/gutenberg-pptx/',
  'http://embedpress.local/gutenberg-tiktok/',
  'http://embedpress.local/gutenberg-twitch/',
  'http://embedpress.local/gutenberg-youtube-live-chat/',
  'http://embedpress.local/gutenberg-apple/',
  'http://embedpress.local/gutenberg-boomplay/',
  'http://embedpress.local/gutenberg-google/',
  'http://embedpress.local/gutenberg-gumroad/',
  'http://embedpress.local/gutenberg-signles/',
  'http://embedpress.local/gutenberg-spotify/',
  'http://embedpress.local/gutenberg-youtube/'
  // Add more URLs to this list
];

test('Check for Fatal Error on EmbedPress', async ({ page }) => {
  // Disables the timeout
  test.setTimeout(0);

  for (const url of urls) {
    await page.goto(url);

    const REGEXP_PHP_ERROR = /(<b>)?(Fatal error|Recoverable fatal error|Warning|Parse error|Notice|Strict Standards|Deprecated|Unknown error)(<\/b>)?: (.*?) in (.*?) on line (<b>)?\d+(<\/b>)?/;
    const fatalError1 = await page.getByText('Fatal error:').isVisible().catch(() => false);
    const fatalError2 = await page.getByText('There has been a critical error on this website.').isVisible().catch(() => false);

    // Get the page content
    const pageContent = await page.content();

    // Check for the fatal error message using the regex
    const matches = pageContent.match(REGEXP_PHP_ERROR);

    if (matches || fatalError1 || fatalError2) {
      console.log(`❌ Fatal Error - ${url}`);
    } else {
      console.log(`✅ Page loaded properly - ${url}`);
    }
  }
});
