import { test, expect } from '@playwright/test';

test('Delete customer account', async ({ page }) => {
  await page.goto('/delete-customer');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the account is disabled')).toBeVisible();
});
