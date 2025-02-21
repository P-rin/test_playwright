import { test ,expect } from "@playwright/test";

const authPath = 'tests/test_by_AC/auth.json';

//test.use({ storageState: 'tests/test_by_AC/auth.json' });

test.beforeEach(async ({ page }) => {
    await page.goto('await page.goto('chrome-error://chromewebdata/');');
    await page.waitForLoadState('load');
    await page.locator('input[name="user_name"]').fill('surachaizx');
    await page.locator('input[name="user_password"]').fill('zxzx88zxzx');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.evaluate(() => localStorage.getItem('authToken'))).not.toBe(null);
    //const context = await page.context();
    //await context.storageState({ path: authPath });
});



    test('User Add NVR', async ({ page }) => {
        await page.getByRole('button', { name: 'Create NVR & Camera' }).click();
        await page.locator('input[name="name"]').fill('automate');
        await page.locator('input[name="ip"]').fill('10.93.42.98');
        await page.locator('input[name="user"]').fill('admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');
        await page.locator('div').filter({ hasText: /^brand$/ }).getByLabel('Open').click();
        await page.getByRole('option', { name: 'Dahua' }).click();
        await page.locator('input[name="location"]').fill('ปากซอยฉลองกรุง 17');
        await page.locator('div').filter({ hasText: /^District$/ }).getByLabel('Open').click();
        await page.getByRole('option', { name: 'เขตพระนคร' }).click();
        await page.locator('input[name="latitude"]').fill('13.749749');
        await page.locator('input[name="longitude"]').fill('100.79377');
        await page.getByRole('button', { name: 'Create' }).click();
        await page.getByRole('button', { name: 'OK' }).click();
        await page.getByRole('button', { name: 'Back' }).click();
    });
    
    test('Add NVR(No data)', async ({ page }) => {
        await page.getByRole('button', { name: 'Create NVR & Camera' }).click();
        await page.getByRole('button', { name: 'Create NVR & Camera' }).click();
        await page.getByRole('button', { name: 'Create NVR & Camera' }).click();
        await expect(page.locator('div').filter({ hasText: /^Create$/ }).nth(1)).toBeDisabled();
    });
    
    test('Add NVR(Wrong data)', async ({ page }) => {
        await page.getByRole('button', { name: 'Create NVR & Camera' }).click();
        await page.locator('input[name="name"]').fill('automate');
        await page.locator('input[name="ip"]').fill('test');
        await page.locator('input[name="user"]').fill('admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');
        await page.locator('div').filter({ hasText: /^brand$/ }).getByLabel('Open').click();
        await page.getByRole('option', { name: 'Dahua' }).click();
        await page.locator('input[name="location"]').fill('ปากซอยฉลองกรุง 17');
        await page.locator('div').filter({ hasText: /^District$/ }).getByLabel('Open').click();
        await page.getByRole('option', { name: 'เขตพระนคร' }).click();
        await page.locator('input[name="latitude"]').fill('test');
        await page.locator('input[name="longitude"]').fill('test');
        await expect(page.locator('div').filter({ hasText: /^Create$/ }).nth(1)).toBeDisabled();
    });
    
    test('Add NVR(duplicate)', async ({ page }) => {
        await page.getByRole('button', { name: 'Create NVR & Camera' }).click();
        await page.locator('input[name="name"]').fill('automate');
        await page.locator('input[name="ip"]').fill('10.93.42.98');
        await page.locator('input[name="user"]').fill('admin');
        await page.getByRole('textbox', { name: 'Password' }).fill('admin1234');
        await page.locator('div').filter({ hasText: /^brand$/ }).getByLabel('Open').click();
        await page.getByRole('option', { name: 'Dahua' }).click();
        await page.locator('input[name="location"]').fill('ปากซอยฉลองกรุง 17');
        await page.locator('div').filter({ hasText: /^District$/ }).getByLabel('Open').click();
        await page.getByRole('option', { name: 'เขตพระนคร' }).click();
        await page.locator('input[name="latitude"]').fill('13.749749');
        await page.locator('input[name="longitude"]').fill('100.79377');
        await page.getByRole('button', { name: 'Create' }).click();
        await expect(page.getByText('create failed.')).toBeVisible();
    });

    
test('S02-TC03', async ({page}) => {
    await page.goto('https://sit.larry-cctv.com/login');
    await page.getByRole('textbox', { name: 'E-mail' }).click();
    await page.getByRole('textbox', { name: 'E-mail' }).fill('superadmin@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('superadmin');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('textbox', { name: 'Search by Device...' }).click();
    await page.getByRole('textbox', { name: 'Search by Device...' }).fill('automate');
    });