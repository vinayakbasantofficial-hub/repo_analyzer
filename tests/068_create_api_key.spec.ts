import { test, expect } from '@playwright/test';

test('Create API key', async ({ page }) => {
  await page.goto('/create-api');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the key is displayed once')).toBeVisible();
});
