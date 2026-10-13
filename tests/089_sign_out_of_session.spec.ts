import { test, expect } from '@playwright/test';

test('Sign out of session', async ({ page }) => {
  await page.goto('/sign-out');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the login page is displayed')).toBeVisible();
});
