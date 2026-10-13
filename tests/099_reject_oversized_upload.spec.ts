import { test, expect } from '@playwright/test';

test('Reject oversized upload', async ({ page }) => {
  await page.goto('/reject-oversized');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('a size warning appears')).toBeVisible();
});
