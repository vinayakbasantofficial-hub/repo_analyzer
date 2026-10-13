import { test, expect } from '@playwright/test';

test('Save notification settings', async ({ page }) => {
  await page.goto('/save_notification_settings');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('the choice is saved')).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Success')).toBeVisible();
});
