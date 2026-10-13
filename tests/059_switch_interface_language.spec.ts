import { test, expect } from '@playwright/test';

test('Switch interface language', async ({ page }) => {
  await page.goto('/switch_interface_language');
  await page.getByRole('button', { name: 'Save' }).click();
});
