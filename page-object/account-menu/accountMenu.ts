import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class AccountMenu extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    public async clickLink(linkName: string): Promise<void> {

        await this.page.getByRole('link', {name: linkName}).click();
    }

    public getLinkLocator(linkName: string): Locator {

        return this.page.getByRole('link', {name: linkName});
    }
}