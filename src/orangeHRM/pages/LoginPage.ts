import {BasePage} from "./BasePage";

export default class LoginPage extends BasePage{

    private username = this.page.locator('//input[@name="username"]');
    private password = this.page.locator('//input[@name="password"]');
    private loginBtn = this.page.locator('//button[@type="submit"]');

    async login(username:string,password:string){

    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
    }
}