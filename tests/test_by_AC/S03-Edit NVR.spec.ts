import {test, expect} from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto('https://masterdata-sit.larry-cctv.com/auth/sign-in');
    await page.waitForLoadState('load');
    await page.locator('input[name="user_name"]').fill('surachaizx');
    await page.locator('input[name="user_password"]').fill('zxzx88zxzx');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForLoadState('load');
    
});

test('S03-TC01', async ({page}) => {
    await page.getByRole('textbox', { name: 'Search NVR' }).fill('auto');
    await page.getByRole('button', { name: 'Edit NVR & camera' }).click();
    await page.getByRole('textbox', { name: 'Model' }).click({button: 'right'});
    await page.getByRole('textbox', { name: 'Name' }).clear();
    await page.getByRole('textbox', { name: 'Name' }).fill('Editmate');
    await page.getByRole('textbox', { name: 'IP' }).clear();
    await page.getByRole('textbox', { name: 'IP' }).fill('10.156.102.77');
    await page.getByRole('button', { name: 'save' }).click();
    await page.getByRole('button', { name: 'Yes, Update it!' }).click();
    await page.getByRole('button', { name: 'OK' }).click();
    await page.getByRole('button', { name: 'Back' }).click();
    await page.getByRole('textbox', { name: 'Search NVR' }).click();
    await page.getByRole('textbox', { name: 'Search NVR' }).fill('editmate');
    await expect(page.getByRole('cell', { name: 'editmate' })).toBeVisible();
});

test('S03-TC02', async ({page}) => {
await page.getByRole('textbox', { name: 'Search NVR' }).click();
await page.getByRole('textbox', { name: 'Search NVR' }).fill('editmate');
await page.getByRole('button', { name: 'Edit NVR & camera' }).click();
await page.getByRole('textbox', { name: 'IP' }).click();
await page.getByRole('textbox', { name: 'IP' }).fill('testwrong data');
await page.getByRole('button', { name: 'save' }).click();
await page.getByRole('textbox', { name: 'IP' }).focus();
await expect(page.locator('text=กรุณาใส่ Ip address')).toBeVisible();
});

test('S03-TC03', async ({page}) => {

await page.getByRole('textbox', { name: 'Search NVR' }).click();
await page.getByRole('textbox', { name: 'Search NVR' }).fill('editmate');
await page.getByRole('button', { name: 'Edit NVR & camera' }).click();
await page.getByRole('textbox', { name: 'IP' }).click();
await expect(page.locator('div').filter({ hasText: /^save$/ }).isDisabled()).toBe(true);
});   