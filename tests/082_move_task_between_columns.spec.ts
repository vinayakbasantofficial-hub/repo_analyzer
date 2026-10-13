import { test, expect } from '@playwright/test';

test('Move task between columns', async ({ page }) => {
  await page.goto('/move-task');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the new status is saved')).toBeVisible();
});
