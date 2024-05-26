import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";
import { Table } from "./table";

export class ShoppingCart extends BasePage {

    private readonly _table: Table;

    private readonly updateShoppingCartButton: Locator;
    private readonly proceedToCheckoutButton: Locator;
    private readonly _loadingSelector: string = 'div.loading-mask';

    constructor(page: Page) {

        super(page);

        this._table = new Table(page);
        this.updateShoppingCartButton = page.getByRole('button', {name: 'Update Shopping Cart'});
        this.proceedToCheckoutButton = page.getByRole('button', {name: 'Proceed to Checkout'});
    }

    public get table(): Table {

        return this._table;
    }

    public async clickUpdateShoppingCartButton(): Promise<void> {

        await this.updateShoppingCartButton.click();
    }

    public async clickProceedToCheckoutButton(): Promise<void> {

        await this.proceedToCheckoutButton.click();
    }

    public get loadingSelector(): string {

        return this._loadingSelector;
    }
}