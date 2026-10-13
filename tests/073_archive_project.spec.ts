import { test, expect } from '@playwright/test';

test('Archive project', async ({ page }) => {
  await page.goto('/archive_project');
  await page.getByRole('button', { name: 'Save' }).click();
});
