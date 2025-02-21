import { test ,expect } from "@playwright/test";

const authPath = 'tests/test_by_AC/auth.json';

//test.use({ storageState: 'tests/test_by_AC/auth.json' });

test.beforeEach(async ({ page }) => {
    await page.goto('https://masterdata-sit.larry-cctv.com/auth/sign-in');
    await page.waitForLoadState('load');
    await page.locator('input[name="user_name"]').fill('surachaizx');
    await page.locator('input[name="user_password"]').fill('zxzx88zxzx');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.waitForLoadState('load');
    //const context = await page.context();
    //await context.storageState({ path: authPath });
});

test('S01-TC01', async ({ page }) => {
    await page.waitForLoadState('load');
    await expect(page.getByText('Action')).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Name' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'User' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Password' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Brand' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Model' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Firmware' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Location' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'District' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Latitude' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Longitude' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Status' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Create' })).toBeVisible()
    await expect(page.getByRole('columnheader', { name: 'Update' })).toBeVisible()
});

test('S01-TC02', async ({ page }) => { 
    await page.getByRole('textbox', { name: 'Search NVR' }).click();
    await page.getByRole('textbox', { name: 'Search NVR' }).fill('automate');
    await page.waitForTimeout(1000);
    await expect(page.getByRole('cell', { name: 'automate' })).toBeVisible()
});

test('S01-TC03', async ({ page }) => {
    await page.getByRole('button', { name: 'Go to page 2' }).click();
    await page.getByRole('button', { name: 'Go to page 3' }).click();
    await page.getByRole('button', { name: 'Go to page 4' }).click();
    await page.getByRole('button', { name: 'Go to next page' }).click();
    await page.getByRole('button', { name: 'Go to previous page' }).click();
});

test('S01-TC04', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Search NVR' }).click();
    await page.getByRole('textbox', { name: 'Search NVR' }).fill('***');
    await expect(page.getByText('No Data')).toBeVisible()
});