import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class QuantityField extends BasePage {

    private fieldLocator: Locator | null = null;

    private readonly columnSelector: string = 'td.col.qty'
    private readonly _errorMessageSelector: string = 'div.mage-error';
    private columnLocator: Locator | null = null;

    constructor(page: Page) {

        super(page);
    }

    public setField(parent: Locator): void {

        this.columnLocator = parent.locator(this.columnSelector);
    }

    public async setQuantity(quantity: string): Promise<void> {

        await this.columnLocator?.getByRole('spinbutton', {name: 'Qty'}).fill(quantity);
    }

    public async getFieldInput(): Promise<string | null | undefined> {

        return await this.columnLocator?.getByRole('spinbutton', {name: 'Qty'}).inputValue();
    }

    public get errorMessageLocator(): Locator | undefined {

        return this.columnLocator?.locator(this._errorMessageSelector);
    }
}