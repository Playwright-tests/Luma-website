import { Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class MainMenu extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    public async clickLink(linkName: string) {

        await this.getPage().getByRole('menuitem', {name: linkName}).click();
    }
}