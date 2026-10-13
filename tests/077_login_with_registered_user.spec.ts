import { test, expect } from '@playwright/test';

test('Login with registered user', async ({ page }) => {
  await page.goto('/login_with_registered_user');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('the dashboard is displayed')).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Success')).toBeVisible();
});
