import { test, expect } from '@playwright/test';

test('Change account password', async ({ page }) => {
  await page.goto('/change-account');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the password is changed')).toBeVisible();
});
