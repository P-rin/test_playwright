import {test,expect} from "@playwright/test";
import exp from "constants";
test.beforeEach(async ({ page }) => {
    await page.goto('https://masterdata-sit.larry-cctv.com/auth/sign-in');
    await page.waitForLoadState('load');
    await page.locator('input[name="user_name"]').fill('surachaizx');
    await page.locator('input[name="user_password"]').fill('zxzx88zxzx');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForLoadState('load');
});

test('S04-TC02', async ({page}) => {
    await page.getByRole('textbox', { name: 'Search NVR' }).click();
    await page.getByRole('textbox', { name: 'Search NVR' }).fill('editmate');
    await page.getByRole('button', { name: 'Delete NVR' }).click();
    await page.getByRole('button', { name: 'Cancel' }).click();
    await expect(page.getByRole('cell', { name: 'editmate' })).toBeVisible();
    } );

test('S04-TC01&S04-TC04', async ({page}) => {
await page.getByRole('textbox', { name: 'Search NVR' }).fill('editmate');
await page.getByRole('button', { name: 'Edit NVR & camera' }).click();
await page.getByRole('button', { name: 'Add' }).click();
await page.locator('input[name="Name"]').click();
await page.locator('input[name="Name"]').fill('test camera');
await page.getByRole('combobox', { name: 'Nvr Channel' }).click();
await page.getByRole('option', { name: '1', exact: true }).click();
await page.getByRole('combobox', { name: 'Rtc name' }).click();
await page.getByRole('option', { name: 'บางเขน 1', exact: true }).click();
await page.locator('input[name="CameraDescription"]').click();
await page.locator('input[name="CameraDescription"]').fill('testdescript');
await page.getByRole('button', { name: 'Add' }).click();
await page.getByRole('button', { name: 'create' }).click();
await page.getByRole('button', { name: 'OK' }).click();
await page.getByRole('button', { name: 'Back' }).click();
await page.getByRole('textbox', { name: 'Search NVR' }).click();
await page.getByRole('textbox', { name: 'Search NVR' }).fill('editmate');
await page.getByRole('button', { name: 'Delete NVR' }).click();
await page.getByRole('button', { name: 'Yes, delete it!' }).click();
await page.getByRole('button', { name: 'OK' }).click();
await page.getByRole('textbox', { name: 'Search NVR' }).click();
await page.getByRole('textbox', { name: 'Search NVR' }).fill('editmate');
await expect(page.getByText('No Data')).toBeVisible();
});

test('S04-TC03', async ({page}) => {
await page.goto('https://sit.larry-cctv.com/login');
await page.getByRole('textbox', { name: 'E-mail' }).click();
await page.getByRole('textbox', { name: 'E-mail' }).fill('superadmin@gmail.com');
await page.getByRole('textbox', { name: 'Password' }).click();
await page.getByRole('textbox', { name: 'Password' }).fill('superadmin');
await page.getByRole('button', { name: 'Login' }).click();
await page.waitForLoadState('load');
await page.getByRole('textbox', { name: 'Search by Device...' }).click();
await page.getByRole('textbox', { name: 'Search by Device...' }).fill('editmate');
await expect(page.locator('#search-suggestion-list div')).toHaveText(/Not found/i);
});