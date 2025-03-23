# WP Fatal Checker

In WordPress, we continuously update our plugin. As a Junior Software Test Engineer, I have to test various aspects, one of which is checking for any fatal errors in the plugin. To streamline this process, I wrote a small automation test script using Playwright. This script navigates through every page and checks for any PHP/fatal error messages. It saves me a lot of time because we have numerous pages to check, and we need to test across different PHP versions. Since this is a long-term process, automating it with a script was essential.

## How to Use it?

To Install playwright:
```
npm init playwright@latest
```
To update playwright:
```
npm install -D @playwright/test@latest
```
Usually after Playwright update, browsers need to be updated with command:
```
npx playwright install --with-deps
```
