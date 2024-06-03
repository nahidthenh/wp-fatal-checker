const { test, expect } = require('@playwright/test');
const urls = [
  'http://embedpress.qcheck.site/1-youtube-singleee',
  'http://embedpress.qcheck.site/1-youtube-singleee/',
  'http://embedpress.qcheck.site/classic-gumroad/',
  'http://embedpress.qcheck.site/classic-meetup/',
  'http://embedpress.qcheck.site/classic-nft/',
  'http://embedpress.qcheck.site/classic-pdf/',
  'http://embedpress.qcheck.site/classic-twitch/',
  'http://embedpress.qcheck.site/classic-apple/',
  'http://embedpress.qcheck.site/classic-boomplay/',
  'http://embedpress.qcheck.site/classic-calendly/',
  'http://embedpress.qcheck.site/classic-facebook/',
  'http://embedpress.qcheck.site/classic-google/',
  'http://embedpress.qcheck.site/classic-singles/',
  'http://embedpress.qcheck.site/classic-spotify/',
  'http://embedpress.qcheck.site/classic-youtube/',
  'http://embedpress.qcheck.site/contact/',
  'http://embedpress.qcheck.site/elementor-gumroad/',
  'http://embedpress.qcheck.site/elementor-adv-test/',
  'http://embedpress.qcheck.site/elementor-calendly/',
  'http://embedpress.qcheck.site/elementor-instra/',
  'http://embedpress.qcheck.site/elementor-meetup/',
  'http://embedpress.qcheck.site/elementor-nft/',
  'http://embedpress.qcheck.site/elementor-nrk-github-gist-acf/',
  'http://embedpress.qcheck.site/elementor-pdf/',
  'http://embedpress.qcheck.site/elementor-pdf-test/',
  'http://embedpress.qcheck.site/elementor-twitch/',
  'http://embedpress.qcheck.site/elementor-apple/',
  'http://embedpress.qcheck.site/elementor-boomplay/',
  'http://embedpress.qcheck.site/elementor-facebook/',
  'http://embedpress.qcheck.site/elementor-google/',
  'http://embedpress.qcheck.site/elementor-pdf-2/',
  'http://embedpress.qcheck.site/elementor-singles/',
  'http://embedpress.qcheck.site/elementor-spotify/',
  'http://embedpress.qcheck.site/elementor-youtube/',
  'http://embedpress.qcheck.site/guntenberg-facebook/',
  'http://embedpress.qcheck.site/guntenberg-meetup/',
  'http://embedpress.qcheck.site/guntenberg-pdf/',
  'http://embedpress.qcheck.site/gutenberg-adv-feature-test/',
  'http://embedpress.qcheck.site/gutenberg-all-single/',
  'http://embedpress.qcheck.site/gutenberg-calendly/',
  'http://embedpress.qcheck.site/gutenberg-calendly-2/',
  'http://embedpress.qcheck.site/gutenberg-github-gist-nrk-acf/',
  'http://embedpress.qcheck.site/gutenberg-nft/',
  'http://embedpress.qcheck.site/gutenberg-opensea-nft/',
  'http://embedpress.qcheck.site/gutenberg-pdf/',
  'http://embedpress.qcheck.site/gutenberg-pptx/',
  'http://embedpress.qcheck.site/gutenberg-tiktok/',
  'http://embedpress.qcheck.site/gutenberg-twitch/',
  'http://embedpress.qcheck.site/gutenberg-youtube-live-chat/',
  'http://embedpress.qcheck.site/gutenberg-apple/',
  'http://embedpress.qcheck.site/gutenberg-boomplay/',
  'http://embedpress.qcheck.site/gutenberg-google/',
  'http://embedpress.qcheck.site/gutenberg-gumroad/',
  'http://embedpress.qcheck.site/gutenberg-signles/',
  'http://embedpress.qcheck.site/gutenberg-spotify/',
  'http://embedpress.qcheck.site/gutenberg-youtube/'
  // Add more URLs to this list
];

test('Check for Fatal Error on EmbedPress', async ({ page }) => {
  // Disables the timeout
  test.setTimeout(0);

  for (const url of urls) {
    await test.step(`Checking URL: ${url}`, async () => {
      await page.goto(url);

      // Check for the fatal error message
      const fatalError1 = await page.getByText('Fatal error:').isVisible().catch(() => false);
      const fatalError2 = await page.getByText('There has been a critical error on this website.').isVisible().catch(() => false);

      if (fatalError1 || fatalError2) {
        console.log(`❌ Fatal Error - ${url}`);
        test.info().annotations.push({ type: 'End Result', description: `URL: ${url} - ❌ Fatal Error` });
      } else {
        console.log(`✅ Page loaded properly - ${url}`);
        test.info().annotations.push({ type: 'End Result', description: `URL: ${url} - ✅ Page loaded properly` });
      }
    });
  }
});