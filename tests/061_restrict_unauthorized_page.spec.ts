import { test, expect } from '@playwright/test';

test('Restrict unauthorized page', async ({ page }) => {
  await page.goto('/restrict_unauthorized_page');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('access is denied')).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Success')).toBeVisible();
});
