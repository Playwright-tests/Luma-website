import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class ShoppingCartThumbnail extends BasePage {

    readonly selector: string;
    readonly link: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {

        super(page);

        this.selector = '#ui-id-1';
        this.link = page.getByRole('link', {name: 'View and Edit Cart'});
        this.checkoutButton = page.locator('#top-cart-btn-checkout');
    }

    async clickLink() {

        await this.link.click();
    }

    async clickCheckoutButton() {

        await this.checkoutButton.click();
    }

    getSelector() {

        return this.selector;
    }
}