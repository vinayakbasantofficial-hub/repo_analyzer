import { test, expect } from '@playwright/test';

test('Upload CSV data', async ({ page }) => {
  await page.goto('/upload_csv_data');
  await page.getByRole('button', { name: 'Save' }).click();
});
