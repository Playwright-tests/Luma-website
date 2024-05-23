import { Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class AccountMenu extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    public async clickLink(linkName: string): Promise<void> {

        await this.getPage().getByRole('link', {name: linkName}).click();
    }
}