const {test,expect } = require('@playwright/test');
test('register account failed: no employee matches', async ({page}) => {
    await page.goto('http://localhost:3000/register');
    await expect(page.locator('#employee_id')).toBeVisible();
    await expect(page.locator('#employee_name')).toBeVisible();
    await expect(page.locator('#employee_email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#repeat_password')).toBeVisible();

    // 模拟输入数据, 两次密码相同
    await page.fill('#employee_id', '123');
    await page.fill('#employee_name', 'Alice Liu');
    await page.fill('#employee_email', 'alice@example.com');
    await page.fill('#password', '123456');
    await page.fill('#repeat_password', '123456');

    // 点击 Submit
    await page.click('button[type="submit"]');
    //点击 Cancel
    await page.click('button[type="button"]');

    // 可选：等待提示框或跳转
    await page.waitForTimeout(1000); // 如果跳转会慢一点

});

test('register account failed: no employee matches && password verify failed', async ({page}) => {
    await page.goto('http://localhost:3000/register');
    await expect(page.locator('#employee_id')).toBeVisible();
    await expect(page.locator('#employee_name')).toBeVisible();
    await expect(page.locator('#employee_email')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('#repeat_password')).toBeVisible();

    // 模拟输入数据, 两次密码不同
    await page.fill('#employee_id', '123');
    await page.fill('#employee_name', 'Alice Liu');
    await page.fill('#employee_email', 'alice@example.com');
    await page.fill('#password', '123456');
    await page.fill('#repeat_password', '234567');


    // 点击 Submit
    await page.click('button[type="submit"]');
    //点击 Cancel
    await page.click('button[type="button"]');

    // 可选：等待提示框或跳转
    await page.waitForTimeout(1000); // 如果跳转会慢一点

});