import { test, expect } from '@playwright/test';

test('login with wrong username and password', async ({ page }) => {
  await page.goto('https://reg.kmutnb.ac.th/registrar/login');
  await page.getByLabel('ICIT Account').click();
  await page.getByLabel('ICIT Account').fill('abcdefg');
  await page.getByPlaceholder('············').click();
  await page.getByPlaceholder('············').fill('123456789');
  await page.locator('app-login').getByRole('button', { name: 'เข้าสู่ระบบ' }).click();
});