import { test, expect } from '@playwright/test';

test('Save delivery address', async ({ page }) => {
  await page.goto('/save-delivery');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the address appears in the address book')).toBeVisible();
});
