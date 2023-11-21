import { test, expect } from '@playwright/test';

test('login with wrong username and password should redirect to profile pages', async ({ page }) => {
  await page.goto('https://reg.kmutnb.ac.th/registrar/login');
  await page.fill('id=basic-default-password','abcdefg');
  await page.fill('id=basic-default-password','123456789');
  await page.click('//button[text()="เข้าสู่ระบบ"]');
  await page.waitForSelector('div.alert-body');
  const text_alert = await page.textContent('div.alert-body');
  await expect(text_alert).toEqual(' Account not found [--abcdefg--] ')
});