import { test, expect } from '@playwright/test';

test('Filter products by price', async ({ page }) => {
  await page.goto('/filter-products');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('only matching products remain')).toBeVisible();
});
