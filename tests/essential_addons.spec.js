const { test, expect } = require('@playwright/test');

const urls = [

    'https://ea.qcheck.site/',
    'https://ea.qcheck.site/advanced-search/',
    'https://ea.qcheck.site/simple-menu/',
    'https://ea.qcheck.site/creative-buttons/',
    'https://ea.qcheck.site/static-product',
    'https://ea.qcheck.site/event-calendar',
    'https://ea.qcheck.site/flip-box',
    'https://ea.qcheck.site/logo-carousel',
    'https://ea.qcheck.site/dual-color-heading',
    'https://ea.qcheck.site/info-box',
    'https://ea.qcheck.site/team-member-carousel',
    'https://ea.qcheck.site/advanced-accordion',
    'https://ea.qcheck.site/advanced-tabs',
    'https://ea.qcheck.site/testimonial-slider',
    'https://ea.qcheck.site/team-member',
    'https://ea.qcheck.site/tooltip',
    'https://ea.qcheck.site/sticky-video',
    'https://ea.qcheck.site/testimonials',
    'https://ea.qcheck.site/protected-content',
    'https://ea.qcheck.site/offcanvas',
    'https://ea.qcheck.site/advanced-menu',
    'https://ea.qcheck.site/toggle',
    'https://ea.qcheck.site/feature-list',
    'https://ea.qcheck.site/advanced-data-table',
    'https://ea.qcheck.site/post-block',
    'https://ea.qcheck.site/nft-gallery',
    'https://ea.qcheck.site/smart-post-list',
    'https://ea.qcheck.site/advanced-google-map',
    'https://ea.qcheck.site/content-ticker',
    'https://ea.qcheck.site/post-timeline',
    'https://ea.qcheck.site/dynamic-gallery',
    'https://ea.qcheck.site/post-grid',
    'https://ea.qcheck.site/data-table',
    'https://ea.qcheck.site/content-timeline',
    'https://ea.qcheck.site/post-carousel',
    'https://ea.qcheck.site/business-reviews',
    'https://ea.qcheck.site/pricing-table',
    'https://ea.qcheck.site/call-to-action',
    'https://ea.qcheck.site/price-menu',
    'https://ea.qcheck.site/interactive-circle',
    'https://ea.qcheck.site/interactive-cards',
    'https://ea.qcheck.site/interactive-promo',
    'https://ea.qcheck.site/one-page-navigation',
    'https://ea.qcheck.site/filterable-gallery',
    'https://ea.qcheck.site/image-hotspots',
    'https://ea.qcheck.site/image-scroller',
    'https://ea.qcheck.site/image-comparison',
    'https://ea.qcheck.site/divider',
    'https://ea.qcheck.site/fancy-text',
    'https://ea.qcheck.site/counter',
    'https://ea.qcheck.site/countdown',
    'https://ea.qcheck.site/lightbox-and-modal',
    'https://ea.qcheck.site/flip-carousel',
    'https://ea.qcheck.site/progress-bar',
    'https://ea.qcheck.site/image-accordion',
    'https://ea.qcheck.site/svg-draw',
    'https://ea.qcheck.site/fancy-chart',
    'https://ea.qcheck.site/typeform',
    'https://ea.qcheck.site/contact-form-7',
    'https://ea.qcheck.site/wpforms',
    'https://ea.qcheck.site/ninja-forms',
    'https://ea.qcheck.site/mailchimp',
    'https://ea.qcheck.site/caldera-forms',
    'https://ea.qcheck.site/login-register-form',
    'https://ea.qcheck.site/FluentForm',
    'https://ea.qcheck.site/weforms',
    'https://ea.qcheck.site/formstack',
    'https://ea.qcheck.site/gravity-forms',
    'https://ea.qcheck.site/twitter-feed-carousel',
    'https://ea.qcheck.site/twitter-feed',
    'https://ea.qcheck.site/instagram-feed',
    'https://ea.qcheck.site/facebook-feed',
    'https://ea.qcheck.site/BetterDocs-category-box',
    'https://ea.qcheck.site/BetterDocs-search-form',
    'https://ea.qcheck.site/woo-thank-you',
    'https://ea.qcheck.site/woo-cart',
    'https://ea.qcheck.site/woo-product-carousel',
    'https://ea.qcheck.site/woo-product-gallery',
    'https://ea.qcheck.site/woo-checkout',
    'https://ea.qcheck.site/woo-product-slider',
    'https://ea.qcheck.site/woo-product-collections',
    'https://ea.qcheck.site/woo-product-grid',
    'https://ea.qcheck.site/woo-product-compare',
    'https://ea.qcheck.site/woo-sross-sells',
    'https://ea.qcheck.site/woo-account-dashboard',
    'https://ea.qcheck.site/woo-product-list',
    'https://ea.qcheck.site/cross-domain-copy-paste',
    'https://ea.qcheck.site/scroll-to-top',
    'https://ea.qcheck.site/content-protection',
    'https://ea.qcheck.site/table-of-contents',
    'https://ea.qcheck.site/parallax',
    'https://ea.qcheck.site/reading-progress-bar',
    'https://ea.qcheck.site/particles',
    'https://ea.qcheck.site/advanced-tooltip',
    'https://ea.qcheck.site/conditional-display',
    'https://ea.qcheck.site/wrapper-link'

    // More urls 

]

test('Essential Addons Fatal Error Check', async ({ page }) => {
    test.setTimeout(0); // Disables the timeout

    for (const url of urls) {

        // await test.step(`Checking url-  ${url}`, async () => {
        await page.goto(url);

        // Fatal Error Message Check 
        const fatalError1 = await page.getByText('Fatal error:').isVisible().catch(() => false);
        const fatalError2 = await page.getByText('There has been a critical error on this website.').isVisible().catch(() => false);

        if (fatalError1 || fatalError2) {

            console.log(`URL: ${url} - ❌ Fatal Error`);

        } else {

            console.log(`URL: ${url} - ✅ Page loaded properly`);

        }
        // })

    }

})