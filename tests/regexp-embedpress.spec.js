const { test, expect } = require('@playwright/test');
const urls = [
  'https://embedpress.qcheck.site/',
  'https://embedpress.qcheck.site/1-youtube-singleee/',
  'https://embedpress.qcheck.site/classic-gumroad/',
  'https://embedpress.qcheck.site/classic-meetup/',
  'https://embedpress.qcheck.site/classic-nft/',
  'https://embedpress.qcheck.site/classic-pdf/',
  'https://embedpress.qcheck.site/classic-twitch/',
  'https://embedpress.qcheck.site/classic-apple/',
  'https://embedpress.qcheck.site/classic-boomplay/',
  'https://embedpress.qcheck.site/classic-calendly/',
  'https://embedpress.qcheck.site/classic-facebook/',
  'https://embedpress.qcheck.site/classic-google/',
  'https://embedpress.qcheck.site/classic-singles/',
  'https://embedpress.qcheck.site/classic-spotify/',
  'https://embedpress.qcheck.site/classic-youtube/',
  'https://embedpress.qcheck.site/contact/',
  'https://embedpress.qcheck.site/elementor-gumroad/',
  'https://embedpress.qcheck.site/elementor-adv-test/',
  'https://embedpress.qcheck.site/elementor-calendly/',
  'https://embedpress.qcheck.site/elementor-instra/',
  'https://embedpress.qcheck.site/elementor-meetup/',
  'https://embedpress.qcheck.site/elementor-nft/',
  'https://embedpress.qcheck.site/elementor-nrk-github-gist-acf/',
  'https://embedpress.qcheck.site/elementor-pdf/',
  'https://embedpress.qcheck.site/elementor-pdf-test/',
  'https://embedpress.qcheck.site/elementor-twitch/',
  'https://embedpress.qcheck.site/elementor-apple/',
  'https://embedpress.qcheck.site/elementor-boomplay/',
  'https://embedpress.qcheck.site/elementor-facebook/',
  'https://embedpress.qcheck.site/elementor-google/',
  'https://embedpress.qcheck.site/elementor-pdf-2/',
  'https://embedpress.qcheck.site/elementor-singles/',
  'https://embedpress.qcheck.site/elementor-spotify/',
  'https://embedpress.qcheck.site/elementor-youtube/',
  'https://embedpress.qcheck.site/guntenberg-facebook/',
  'https://embedpress.qcheck.site/guntenberg-meetup/',
  'https://embedpress.qcheck.site/guntenberg-pdf/',
  'https://embedpress.qcheck.site/gutenberg-adv-feature-test/',
  'https://embedpress.qcheck.site/gutenberg-all-single/',
  'https://embedpress.qcheck.site/gutenberg-calendly/',
  'https://embedpress.qcheck.site/gutenberg-calendly-2/',
  'https://embedpress.qcheck.site/gutenberg-github-gist-nrk-acf/',
  'https://embedpress.qcheck.site/gutenberg-nft/',
  'https://embedpress.qcheck.site/gutenberg-opensea-nft/',
  'https://embedpress.qcheck.site/gutenberg-pdf/',
  'https://embedpress.qcheck.site/gutenberg-pptx/',
  'https://embedpress.qcheck.site/gutenberg-tiktok/',
  'https://embedpress.qcheck.site/gutenberg-twitch/',
  'https://embedpress.qcheck.site/gutenberg-youtube-live-chat/',
  'https://embedpress.qcheck.site/gutenberg-apple/',
  'https://embedpress.qcheck.site/gutenberg-boomplay/',
  'https://embedpress.qcheck.site/gutenberg-google/',
  'https://embedpress.qcheck.site/gutenberg-gumroad/',
  'https://embedpress.qcheck.site/gutenberg-signles/',
  'https://embedpress.qcheck.site/gutenberg-spotify/',
  'https://embedpress.qcheck.site/gutenberg-youtube/'
  // Add more URLs to this list
];

const REGEXP_PHP_ERROR = /(<b>)?(Fatal error|Recoverable fatal error|Warning|Parse error|Notice|Strict Standards|Deprecated|Unknown error)(<\/b>)?: (.*?) in (.*?) on line (<b>)?\d+(<\/b>)?/;

test('Check for Fatal Error on EmbedPress', async ({ page }) => {
  // Disables the timeout
  test.setTimeout(0);

  for (const url of urls) {
    await page.goto(url);

    // Get the page content
    const pageContent = await page.content();

    // Check for the fatal error message using the regex
    const matches = pageContent.match(REGEXP_PHP_ERROR);

    if (matches) {
      console.log(`❌ Fatal Error - ${url}`);
    } else {
      console.log(`✅ Page loaded properly - ${url}`);
    }
  }
});
