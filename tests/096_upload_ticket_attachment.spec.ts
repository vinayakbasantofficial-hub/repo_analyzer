import { test, expect } from '@playwright/test';

test('Upload ticket attachment', async ({ page }) => {
  await page.goto('/upload-ticket');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the attachment is saved')).toBeVisible();
});
