import { test, expect } from '@playwright/test';

test('Delete task comment', async ({ page }) => {
  await page.goto('/delete-task');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the comment disappears')).toBeVisible();
});
