import { test, expect } from '@playwright/test';

test('Receive task notification', async ({ page }) => {
  await page.goto('/receive-task');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('a notification is generated')).toBeVisible();
});
