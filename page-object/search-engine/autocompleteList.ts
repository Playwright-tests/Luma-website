import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class AutocompleteList extends BasePage {

    private readonly wrapperSelector: string = '#search_autocomplete';
    private readonly wrapperLocator: Locator; 
    private items: Promise<Locator[]>;

    constructor(page: Page) {

        super(page);

        this.wrapperLocator = page.locator(this.wrapperSelector);
    }

    public getWrapperSelector(): string {

        return this.wrapperSelector;
    }

    public findItems(): void {

        this.items = this.wrapperLocator.locator('li[role="option"]').all();
    }

    public getItems(): Promise<Locator[]> {

        return this.items;
    }
}