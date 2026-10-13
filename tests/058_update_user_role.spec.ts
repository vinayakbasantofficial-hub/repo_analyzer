import { test, expect } from '@playwright/test';

test('Update user role', async ({ page }) => {
  await page.goto('/update-user');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the user gains editor permissions')).toBeVisible();
});
