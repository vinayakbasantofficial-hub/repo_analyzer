import { test, expect } from '@playwright/test';

test('Update item quantity', async ({ page }) => {
  await page.goto('/update-item');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the line total is recalculated')).toBeVisible();
});
