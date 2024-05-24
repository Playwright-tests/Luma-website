import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";
import { QuantityField } from "./quantityField";

export class ProductPage extends BasePage {

    readonly productName: Locator;
    readonly price: Locator;
    readonly quantityField: QuantityField;
    readonly addToCartButton: Locator;
    readonly messageSuccessSelector: string;
    readonly messageSuccessLocator: Locator;
    readonly requiredSizeMessageSelector: string;
    readonly requiredSizeMessageLocator: Locator;
    readonly requiredColorMessageSelector: string;
    readonly requiredColorMessageLocator: Locator
    
    constructor(page: Page) {

        super(page);

        this.messageSuccessSelector = '.message-success.success.message';
        this.productName = page.locator('.page-title');
        this.price = page.locator('.product-info-price').locator('.price');
        this.addToCartButton = page.getByRole('button', {name: 'Add to Cart'});
        this.messageSuccessLocator = page.locator(this.messageSuccessSelector);
        this.requiredSizeMessageSelector = '[id="super_attribute\\[143\\]-error"]';
        this.requiredSizeMessageLocator = page.locator(this.requiredSizeMessageSelector);
        this.requiredColorMessageSelector = '[id="super_attribute\\[93\\]-error"]';
        this.requiredColorMessageLocator = page.locator(this.requiredColorMessageSelector);

        this.quantityField = new QuantityField(page);
    }

    async getProductName() {

        return await this.productName.textContent();
    }

    async getPrice() {

        return await this.price.textContent();
    }

    async setSize(size: string) {

        await this.page.getByLabel(size).click();
    }

    async setColor(color: string) {

        await this.page.getByLabel(color).click();
    }

    getQuantityField() {

        return this.quantityField;
    }

    async clickAddToCartButton() {

        await this.addToCartButton.click();
    }

    getMessageSuccessSelector() {

        return this.messageSuccessSelector;
    }

    getMessageSuccessLocator() {

        return this.messageSuccessLocator;
    }

    getRequiredSizeMessageSelector() {

        return this.requiredSizeMessageSelector;
    }

    getRequiredColorMessageSelector() {

        return this.requiredColorMessageSelector;
    }

    getRequiredSizeMessageLocator() {

        return this.requiredSizeMessageLocator;
    }

    getRequiredColorMessageLocator() {

        return this.requiredColorMessageLocator;
    }
}