import { test, expect } from '@playwright/test';

test('Apply coupon at checkout', async ({ page }) => {
  await page.goto('/apply-coupon');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the total reflects the discount')).toBeVisible();
});
