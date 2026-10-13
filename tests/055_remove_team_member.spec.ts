import { test, expect } from '@playwright/test';

test('Remove team member', async ({ page }) => {
  await page.goto('/remove_team_member');
  await expect(page.getByRole('heading')).toBeVisible();
});
