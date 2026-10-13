import { test, expect } from '@playwright/test';

test('Use pagination', async ({ page }) => {
  await page.goto('/use-pagination');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the next group of records appears')).toBeVisible();
});
