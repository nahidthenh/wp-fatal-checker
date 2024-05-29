// // @ts-check
// const { test, expect } = require('@playwright/test');

// const urls = [
//   'https://embedpress.qcheck.site/',
//   'https://embedpress.qcheck.site/gutenberg-youtube/',
//   'https://embedpress.qcheck.site/classic-youtube/',
//   'https://embedpress.qcheck.site/elementor-youtube/',
//   'https://embedpress.qcheck.site/wp-admin/',
//   'https://sp.qcheck.site/'

//   // Add more URLs to this list
// ];

// test('Check for Fatal Error on EmbedPress', async ({ page }) => {
//   for (const url of urls) {
//     await page.goto(url);

//     // Check for the fatal error message
//     const error = await page.getByText('Fatal error:').isVisible();
//     await page.getByText('There has been a critical error on this website.').isVisible();


//     if (error) {
//       console.log(`URL: ${url} - Fatal Error`);
//     } else {
//       console.log(`URL: ${url} - Page loaded properly`);
//     }
//   }
// });


// @ts-check
const { test, expect } = require('@playwright/test');

const urls = [
  'https://embedpress.qcheck.site/',
  'https://embedpress.qcheck.site/gutenberg-youtube/',
  'https://embedpress.qcheck.site/classic-youtube/',
  'https://embedpress.qcheck.site/elementor-youtube/',
  'https://embedpress.qcheck.site/wp-admin/',
  'https://sp.qcheck.site/'
  // Add more URLs to this list
];

test('Check for Fatal Error on EmbedPress', async ({ page }) => {
  for (const url of urls) {
    await page.goto(url);

    // Check for the fatal error message
    const fatalError1 = await page.getByText('Fatal error:').isVisible().catch(() => false);
    const fatalError2 = await page.getByText('There has been a critical error on this website.').isVisible().catch(() => false);

    if (fatalError1 || fatalError2) {
      console.log(`URL: ${url} - Fatal Error`);
    } else {
      console.log(`URL: ${url} - Page loaded properly`);
    }
  }
});
