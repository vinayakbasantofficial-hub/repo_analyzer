import { test, expect } from '@playwright/test';

test('Complete task', async ({ page }) => {
  await page.goto('/complete_task');
  await expect(page.getByRole('heading')).toBeVisible();
});
