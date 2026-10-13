import { test, expect } from '@playwright/test';

test('Cancel pending order', async ({ page }) => {
  await page.goto('/cancel-pending');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the order is canceled')).toBeVisible();
});
