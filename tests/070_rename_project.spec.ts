import { test, expect } from '@playwright/test';

test('Rename project', async ({ page }) => {
  await page.goto('/rename-project');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the new name appears')).toBeVisible();
});
