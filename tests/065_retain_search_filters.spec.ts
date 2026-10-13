import { test, expect } from '@playwright/test';

test('Retain search filters', async ({ page }) => {
  await page.goto('/retain_search_filters');
  await expect(page.getByRole('heading')).toBeVisible();
});
