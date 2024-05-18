import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class QuantityField extends BasePage {

    readonly field: Locator;
    readonly errorMessageSelector: string;
    readonly errorMessageLocator: Locator;

    constructor(page: Page) {

        super(page);
        this.field = page.locator('#qty');
        this.errorMessageSelector = '#qty-error';
        this.errorMessageLocator = page.locator(this.errorMessageSelector);
    }

    async setQuantity(qty: string) {

        await this.field.fill(qty);
    }

    getErrorMessageSelector() {

        return this.errorMessageSelector;
    }

    getErrorMessageLocator() {

        return this.errorMessageLocator;
    }
}