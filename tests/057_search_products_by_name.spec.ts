import { test, expect } from '@playwright/test';

test('Search products by name', async ({ page }) => {
  await page.goto('/search-products');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('matching results appear')).toBeVisible();
});
