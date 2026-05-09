import {Page} from "@playwright/test";

export abstract class BasePage{
    protected readonly page:Page;
    constructor(page){
        this.page=page;
    }
}