import { test, expect } from '@playwright/test';

test('Choose shipping option', async ({ page }) => {
  await page.goto('/choose-shipping');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: /continue|save|submit|confirm/i }).first().click();
  await expect(page.getByText('the delivery charge changes')).toBeVisible();
});
