import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class Header extends BasePage {

    readonly shoppingCartButton: Locator;

    constructor(page: Page) {

        super(page);

        this.shoppingCartButton = page.getByRole('link', {name: ' My Cart'});
    }

    async clickShoppingCartButton() {

        await this.shoppingCartButton.click();
    }
}