import { test, expect } from '@playwright/test';

test('Sort catalog by price', async ({ page }) => {
  await page.goto('/sort-catalog');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('products are sorted ascending')).toBeVisible();
});
