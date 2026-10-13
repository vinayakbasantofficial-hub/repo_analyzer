import { test, expect } from '@playwright/test';

test('Comment on task', async ({ page }) => {
  await page.goto('/comment-on');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the comment appears in the activity log')).toBeVisible();
});
