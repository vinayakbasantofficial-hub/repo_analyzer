import { test, expect } from '@playwright/test';

test('Invite team member', async ({ page }) => {
  await page.goto('/invite_team_member');
  await page.getByRole('button', { name: 'Save' }).click();
});
