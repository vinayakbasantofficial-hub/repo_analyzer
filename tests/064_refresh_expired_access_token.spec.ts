import { test, expect } from '@playwright/test';

test('Refresh expired access token', async ({ page }) => {
  await page.goto('/refresh-expired');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('a new access token is returned')).toBeVisible();
});
