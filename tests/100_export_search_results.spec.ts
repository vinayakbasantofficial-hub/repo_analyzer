import { test, expect } from '@playwright/test';

test('Export search results', async ({ page }) => {
  await page.goto('/export-search');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('a downloadable CSV is generated')).toBeVisible();
});
