import { test, expect } from '@playwright/test';

test('View product details', async ({ page }) => {
  await page.goto('/view_product_details');
  await page.getByRole('button', { name: 'Save' }).click();
});
