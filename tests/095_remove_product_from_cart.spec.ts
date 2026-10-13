import { test, expect } from '@playwright/test';

test('Remove product from cart', async ({ page }) => {
  await page.goto('/remove_product_from_cart');
  await expect(page.getByRole('heading')).toBeVisible();
});
