import { test, expect } from '@playwright/test';

test('Reject expired coupon', async ({ page }) => {
  await page.goto('/reject-expired');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('a coupon error is shown')).toBeVisible();
});
