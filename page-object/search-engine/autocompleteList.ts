import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class AutocompleteList extends BasePage {

    private readonly _wrapperSelector: string = '#search_autocomplete';
    private readonly wrapperLocator: Locator; 
    private _items: Promise<Locator[]>;

    constructor(page: Page) {

        super(page);

        this.wrapperLocator = page.locator(this._wrapperSelector);
    }

    public get wrapperSelector(): string {

        return this._wrapperSelector;
    }

    public findItems(): void {

        this._items = this.wrapperLocator.locator('li[role="option"]').all();
    }

    public get items(): Promise<Locator[]> {

        return this._items;
    }
}