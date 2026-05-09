import{test,expect} from "@playwright/test"
import LoginPage from "../orangeHRM/pages/LoginPage";


test("orangeHRM E2E Flow @orangeHRM",async ({page})=>{
    await test.step("Login to OrangeHRM",async()=>{
        const loginpage= new LoginPage(page);
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        await loginpage.login("Admin","admin123");
        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
    });

});