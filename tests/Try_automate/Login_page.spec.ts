import { test, expect } from '@playwright/test';
import exp from 'constants';



test('Check Assert Object Login page', async ({ page }) => {
  await page.goto('https://masterdata-sit.larry-cctv.com/auth/sign-in');
  await page.waitForLoadState('load')
  await expect(page.locator('input[name="user_name"]')).toBeVisible()
  await expect(page.locator('input[name="user_password"]')).toBeVisible()
  await expect(page.locator('path')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Forgot password?' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible()
});

test('Check ประเภทข้อมูลที่สามารถกรอกลง User field Box', async ({ page }) => {
  await page.goto('https://masterdata-sit.larry-cctv.com/auth/sign-in');
  await page.waitForLoadState('load')
  const testValues = [
    "ทดสอบภาษาไทย",   // ภาษาไทย
    "Test English",    // ภาษาอังกฤษ
    "1234567890",      // ตัวเลข
    "!@#$%^&*()_+-=",  // อักขระพิเศษ
    "ไทย English 123!@" // รวมทุกอย่าง
];
  for (const value of testValues) {
      await page.locator('input[name="user_name"]').fill(value);
      await expect(page.locator('input[name="user_name"]')).toHaveValue(value);
    }
});

test('Check ประเภทข้อมูลที่สามารถกรอกลง Password field Box', async ({ page }) => {
    await page.goto('https://masterdata-sit.larry-cctv.com/auth/sign-in');
    await page.waitForLoadState('load')
    const testValues = [
      "ทดสอบภาษาไทย",   // ภาษาไทย
      "Test English",    // ภาษาอังกฤษ
      "1234567890",      // ตัวเลข
      "!@#$%^&*()_+-=",  // อักขระพิเศษ
      "ไทย English 123!@" // รวมทุกอย่าง
  ];
    for (const value of testValues) {
        await page.locator('input[name="user_password"]').fill(value);
        await expect(page.locator('input[name="user_password"]')).toHaveValue(value);
      }
  });

  test('ตรวจสอบ Show/hide Icon', async ({ page }) => {
    await page.goto('https://masterdata-sit.larry-cctv.com/auth/sign-in');
    await page.waitForLoadState('load')
    await page.locator('input[name="user_password"]').click();
    await page.locator('input[name="user_password"]').fill('password');
    await expect(page.locator('input[name="user_password"]')).toHaveAttribute('type', 'password');
    await page.locator('path').click();
    await expect(page.locator('input[name="user_password"]')).toHaveAttribute('type', 'text');
    await page.getByTestId('RemoveRedEyeOutlinedIcon').click();
    await expect(page.locator('input[name="user_password"]')).toHaveAttribute('type', 'password');
  });

test('Check การเข้าสู่หน้า forgot Password Page', async ({ page }) => {
    await page.getByRole('link', { name: 'Forgot password?' }).click();
    await expect(page).toHaveURL('https://masterdata-sit.larry-cctv.com/auth/forgot-password')
});

test('Check การเข้าสู่ระบบ User ผิด', async ({ page }) => {
    await page.goto('https://masterdata-sit.larry-cctv.com/auth/sign-in');
    await page.waitForLoadState('load')
    await page.locator('input[name="user_name"]').fill('test');
    await page.locator('input[name="user_password"]').fill('test');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByText('Incorrect username or password')).toBeVisible()
    await page.getByRole('button', { name: 'OK' }).click();
});

test('Check การเข้าสู่ระบบ Pass ผิด', async ({ page }) => {
    await page.goto('https://masterdata-sit.larry-cctv.com/auth/sign-in');
    await page.waitForLoadState('load')
    await page.locator('input[name="user_name"]').fill('test');
    await page.locator('input[name="user_password"]').fill('test');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByText('Incorrect username or password')).toBeVisible()
    await page.getByRole('button', { name: 'OK' }).click();
});

test('Check การเข้าสู่ระบบ User/Pass ถูกต้อง', async ({ page }) => {
    await page.goto('https://masterdata-sit.larry-cctv.com/auth/sign-in');
    await page.waitForLoadState('load')
    await page.locator('input[name="user_name"]').fill('surachaizx');
    await page.locator('input[name="user_password"]').fill('zxzx88zxzx');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.evaluate(() => localStorage.getItem('authToken'))).not.toBe(null);
});