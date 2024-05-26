import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";
import { QuantityField } from "./quantityField";

export class ProductPage extends BasePage {

    readonly productName: Locator;
    readonly price: Locator;
    readonly _quantityField: QuantityField;
    readonly addToCartButton: Locator;
    readonly _messageSuccessSelector: string;
    readonly _requiredSizeMessageSelector: string;
    readonly _requiredColorMessageSelector: string;
    
    constructor(page: Page) {

        super(page);

        this.productName = page.locator('.page-title');
        this.price = page.locator('.product-info-price').locator('.price');
        this.addToCartButton = page.getByRole('button', {name: 'Add to Cart'});
        
        this._messageSuccessSelector = '.message-success.success.message';
        this._requiredSizeMessageSelector = '[id="super_attribute\\[143\\]-error"]';
        this._requiredColorMessageSelector = '[id="super_attribute\\[93\\]-error"]';

        this._quantityField = new QuantityField(page);
    }

    public async getProductName(): Promise<string | null> {

        return await this.productName.textContent();
    }

    public async getPrice(): Promise<string | null> {

        return await this.price.textContent();
    }

    public async setSize(size: string): Promise<void> {

        await this.page.getByLabel(size, {exact: true}).click();
    }

    public async setColor(color: string): Promise<void> {

        await this.page.getByLabel(color).click();
    }

    public get quantityField(): QuantityField {

        return this._quantityField;
    }

    public async clickAddToCartButton(): Promise<void> {

        await this.addToCartButton.click();
    }

    public get messageSuccessSelector(): string {

        return this._messageSuccessSelector;
    }

    public get requiredSizeMessageSelector(): string {

        return this._requiredSizeMessageSelector;
    }

    public get requiredColorMessageSelector(): string {

        return this._requiredColorMessageSelector;
    }

    public get messageSuccessLocator(): Locator {

        return this.page.locator(this._messageSuccessSelector);
    }

    public get requiredSizeMessageLocator(): Locator {

        return this.page.locator(this._requiredSizeMessageSelector);
    }

    public get requiredColorMessageLocator(): Locator {

        return this.page.locator(this._requiredColorMessageSelector);
    }
}