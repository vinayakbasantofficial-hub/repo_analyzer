import { test, expect } from '@playwright/test';

test('Reset forgotten password', async ({ page }) => {
  await page.goto('/reset-forgotten');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('a reset link is sent')).toBeVisible();
});
