const {test,expect } = require('@playwright/test');
test('login failed: user not exist', async ({page}) => {
    await page.goto('http://localhost:3001/');
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();

    // 模拟输入数据, 两次密码相同
    await page.fill('#username', 'alice@gmail.com');
    await page.fill('#password', '111');

    // 点击 Login
    await page.click('button[type="submit"]');
    //点击 Register
    await page.click('button[type="button"]');
   

    // 可选：等待提示框或跳转
    await page.waitForTimeout(1000); // 如果跳转会慢一点

});
test('login failed: incorrect password', async ({page}) => {
    await page.goto('http://localhost:3001/');
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();

    // 模拟输入数据, 两次密码相同
    await page.fill('#username', 'oliversmith@gmail.com');
    await page.fill('#password', 'awbsdc');

    // 点击 Login
    await page.click('button[type="submit"]');
    //点击 Register
    await page.click('button[type="button"]');


    // 可选：等待提示框或跳转
    await page.waitForTimeout(1000); // 如果跳转会慢一点

});
test('login successfully', async ({page}) => {
    await page.goto('http://localhost:3001/');
    await expect(page.locator('#username')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();

    // 模拟输入数据, 两次密码相同
    await page.fill('#username', 'oliversmith@gmail.com');
    await page.fill('#password', '111');

    // 点击 Login
    await page.click('button[type="submit"]');
    //点击 Register
    await page.click('button[type="button"]');
    /*点击 Forget password
    await page.click('a[href="/resetPassword"]');*/

    // 可选：等待提示框或跳转
    await page.waitForTimeout(1000); // 如果跳转会慢一点

});

