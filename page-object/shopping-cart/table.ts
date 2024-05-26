import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";
import { QuantityField } from "./quantityField";

export class Table extends BasePage {

    private readonly tableLocator: Locator;
    private items: Locator[];

    private readonly _tableSelector: string = '#shopping-cart-table';
    private readonly itemSelector: string = 'tbody.cart.item';
    private readonly nameSelector: string = 'strong.product-item-name';
    private readonly sizeColorSelector: string = 'dl.item-options dd';
    private readonly priceSelector: string = 'span.price';
    private readonly subtotalSelector: string = 'span.cart-price';

    private quantityField: QuantityField;

    constructor(page: Page) {

        super(page);

        this.tableLocator = page.locator(this._tableSelector);
        this.quantityField = new QuantityField(page);
    }

    public async findProducts(): Promise<void> {

        this.items = await this.tableLocator.locator(this.itemSelector).all();
    }

    public getRowsCount() {

        return this.items.length;
    }

    public async getName(index: number): Promise<string | null> {

        return await this.items[index].locator(this.nameSelector).textContent();
    }

    public async getSize(index: number): Promise<string | null> {

        return await this.items[index].locator(this.sizeColorSelector).first().textContent();
    }

    public async getColor(index: number): Promise<string | null> {

        return await this.items[index].locator(this.sizeColorSelector).nth(1).textContent();
    }

    public async getPrice(index: number): Promise<string | null> {

        return await this.items[index].locator(this.priceSelector).first().textContent();
    }

    public async getSubtotal(index: number): Promise<string | null> {

        return await this.items[index].locator(this.subtotalSelector).nth(1).textContent();
    }

    public getQuantityField(index: number): QuantityField {

        this.quantityField.setField(this.items[index]);
        return this.quantityField;
    }

    public async clickRemoveButton(index: number): Promise<void> {

        return await this.items[index].getByRole('link', {name: ' Remove item'}).click();
    }

    public get tableSelector(): string {

        return this._tableSelector;
    }
}