import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class Table extends BasePage {

    private readonly tableLocator: Locator;
    private items: Locator[];

    private readonly tableSelector: string = '#shopping-cart-table';
    private readonly itemSelector: string = 'tbody.cart.item';
    private readonly nameSelector: string = 'strong.product-item-name';
    private readonly sizeColorSelector: string = 'dl.item-options dd';
    private readonly priceSelector: string = 'span.price';
    private readonly quantitySelector: string = 'input.input-text.qty';
    private readonly subtotalSelector: string = 'span.cart-price';

    constructor(page: Page) {

        super(page);

        this.tableLocator = page.locator(this.tableSelector);
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

        return await this.items[index].locator(this.subtotalSelector).first().textContent();
    }

    public async setQuantity(index: string, quantity: string): Promise<void> {

        await this.items[index].locator(this.quantitySelector).fill(quantity);
    }

    public async getQuantityFieldInput(index: number): Promise<string | null> {

        return await this.items[index].locator(this.quantitySelector).inputValue();
    }
}