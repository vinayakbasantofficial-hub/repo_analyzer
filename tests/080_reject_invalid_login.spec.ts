import { test, expect } from '@playwright/test';

test('Reject invalid login', async ({ page }) => {
  await page.goto('/reject_invalid_login');
  await page.getByRole('button', { name: 'Save' }).click();
});
