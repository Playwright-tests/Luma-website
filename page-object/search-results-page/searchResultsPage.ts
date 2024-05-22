import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class SearchResultsPage extends BasePage {
    
    private readonly messageSelector = 'div.message.notice';
    private readonly itemSelector: string = 'li.item.product.product-item';
    private readonly listLocator: Locator;
    private items: Promise<Locator[]>;
    private messageLocator: Locator;
    
    constructor(page: Page) {
        
        super(page);
        
        this.listLocator = page.locator('ol.products.list.items.product-items');
        this.messageLocator = page.locator(this.messageSelector);
    }

    public findProducts(): void {

        this.items = this.listLocator.locator(this.itemSelector).all();
    }

    public getItems(): Promise<Locator[]> {

        return this.items;
    }

    public getMessageSelector(): string {

        return this.messageSelector;
    }

    public getMessageLocator(): Locator {

        return this.messageLocator;
    }
}