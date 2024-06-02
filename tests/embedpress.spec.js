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

test('Check for Fatal Error on EmbedPress', async ({ page }) => {
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