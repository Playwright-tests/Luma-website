import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class Header extends BasePage {

    private readonly loggedInSelector: string = 'span.logged-in';
    private readonly shoppingCartButton: Locator;

    constructor(page: Page) {

        super(page);

        this.shoppingCartButton = page.getByRole('link', {name: ' My Cart'});
    }

    public async clickShoppingCartButton(): Promise<void> {

        await this.shoppingCartButton.click();
    }

    public getLoggedInSelector(): string {

        return this.loggedInSelector;
    }
}