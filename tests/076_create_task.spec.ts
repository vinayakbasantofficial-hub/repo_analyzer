import { test, expect } from '@playwright/test';

test('Create task', async ({ page }) => {
  await page.goto('/create-task');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('a task is added')).toBeVisible();
});
