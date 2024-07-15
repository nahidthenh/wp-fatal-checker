# WP Fatal Checker

In WordPress, we continuously update our plugin. As a Junior Software Test Engineer, I have to test various aspects, one of which is checking for any fatal errors in the plugin. To streamline this process, I wrote a small automation test script using Playwright. This script navigates through every page and checks for any PHP/fatal error messages. It saves me a lot of time because we have numerous pages to check, and we need to test across different PHP versions. Since this is a long-term process, automating it with a script was essential.

## How to Use it?

### Step 1 - Clone this repo
```bash
git clone git@github.com:nahidthenh/wp-fatal-checker.git

```
### Step 2 - Install NPM
```bash
npm install -f

```
### Step 3 - Running the Script
```bash
npx playwright test
```

### Step 3.1 - Running a Specific Test
```bash
npx playwright test tests/essential_addons.spec.js
```

### Step 3.2 - Running a Specific Test on a Specific Browser
```bash
npx playwright test tests/essential_addons.spec.js --project chromium
```

### Step 3.3 - Running a Specific Test on a Specific Browser with headed mode
```bash
npx playwright test tests/essential_addons.spec.js --project chromium --headed
```