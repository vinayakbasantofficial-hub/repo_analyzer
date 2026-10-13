import { test, expect } from '@playwright/test';

test('Assign task', async ({ page }) => {
  await page.goto('/assign-task');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the teammate is assigned')).toBeVisible();
});
