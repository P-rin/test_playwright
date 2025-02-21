import {test,expect} from "@playwright/test";
import exp from "constants";

test.beforeEach(async ({ page }) => {
    await page.goto('https://masterdata-sit.larry-cctv.com/auth/sign-in');
    await page.waitForLoadState('load');
    await page.locator('input[name="user_name"]').fill('surachaizx');
    await page.locator('input[name="user_password"]').fill('zxzx88zxzx');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForLoadState('load');
    await page.getByRole('button', { name: 'Camera Lists' }).click();
});

test('S05-TC01', async ({page}) => {
    await expect(page.getByRole('columnheader', { name: 'Action' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Name' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Description' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Status' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'NVR Channel' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'RTC Name' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Create' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Update' })).toBeVisible()
} );

test('S05-TC02', async ({page}) => {
    
await page.getByRole('button', { name: 'Go to page 2' }).click();
await page.getByRole('button', { name: 'Go to page 3' }).click();
await page.getByRole('button', { name: 'Go to next page' }).click();
await page.getByRole('button', { name: 'Go to previous page' }).click();
});

test('S05-TC03', async ({page}) => {
    await page.getByRole('textbox', { name: 'Search Camera' }).click();
    await page.getByRole('textbox', { name: 'Search Camera' }).fill('cameramate');
    await expect(page.getByRole('cell', { name: 'cameramate' })).toBeVisible();
} );

test('S05-TC04', async ({page}) => {
    await page.getByRole('textbox', { name: 'Search Camera' }).click();
    await page.getByRole('textbox', { name: 'Search Camera' }).fill('***');
    await expect(page.getByText('No Data')).toBeVisible();
});