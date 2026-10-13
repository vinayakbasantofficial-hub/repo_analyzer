import { test, expect } from '@playwright/test';

test('Request refund', async ({ page }) => {
  await page.goto('/request-refund');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('a request reference appears')).toBeVisible();
});
