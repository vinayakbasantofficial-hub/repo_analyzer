import { test, expect } from '@playwright/test';

test('Place card order', async ({ page }) => {
  await page.goto('/place-card');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('an order confirmation appears')).toBeVisible();
});
