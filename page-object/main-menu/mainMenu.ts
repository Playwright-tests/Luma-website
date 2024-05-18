import { Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class MainMenu extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    public async clickLink(linkName: string) {

        await this.getPage().getByRole('link', {name: linkName, exact: true}).click();
    }
}