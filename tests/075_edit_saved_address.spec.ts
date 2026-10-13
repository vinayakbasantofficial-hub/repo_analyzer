import { test, expect } from '@playwright/test';

test('Edit saved address', async ({ page }) => {
  await page.goto('/edit_saved_address');
  await expect(page.getByRole('heading')).toBeVisible();
});
