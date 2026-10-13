import { test, expect } from '@playwright/test';

test('Track dispatched order', async ({ page }) => {
  await page.goto('/track_dispatched_order');
  await page.getByRole('button', { name: 'Save' }).click();
});
