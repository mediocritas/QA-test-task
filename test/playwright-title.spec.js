import { test, expect } from '@playwright/test';
import PlaywrightDevPage from '../pageobjects/pages/playwright-dev-page';


test('has title', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});


