import { test, expect } from '@playwright/test';

test('Submit product review', async ({ page }) => {
  await page.goto('/submit_product_review');
  await expect(page.locator('main')).toBeVisible();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByText('the review is visible')).toBeVisible();
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Success')).toBeVisible();
});
