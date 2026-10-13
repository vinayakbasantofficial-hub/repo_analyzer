import { test, expect } from '@playwright/test';

test('Create support ticket', async ({ page }) => {
  await page.goto('/create_support_ticket');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('a new ticket number appears')).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Success')).toBeVisible();
});
