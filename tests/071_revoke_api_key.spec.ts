import { test, expect } from '@playwright/test';

test('Revoke API key', async ({ page }) => {
  await page.goto('/revoke-api');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('future requests with that key are denied')).toBeVisible();
});
