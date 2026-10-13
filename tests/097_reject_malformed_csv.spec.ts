import { test, expect } from '@playwright/test';

test('Reject malformed CSV', async ({ page }) => {
  await page.goto('/reject-malformed');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('validation feedback appears')).toBeVisible();
});
