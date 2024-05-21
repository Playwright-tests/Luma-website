import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";
import { AutocompleteList } from "./autocompleteList";

export class SearchEngine extends BasePage {

    private readonly searchField: Locator;
    private readonly autocompleteListSelector = '#search_autocomplete';
    private readonly autocompleteLocator: Locator;
    private readonly autocompleteList: AutocompleteList;

    constructor(page: Page) {

        super(page);

        this.autocompleteList = new AutocompleteList(page);
        this.searchField = page.locator('#search');
        this.autocompleteLocator = page.locator('li[role="option"]');
    }

    public async enterPhrase(phrase: string): Promise<void> {

        await this.searchField.fill(phrase);
    }

    public async getInput(): Promise<string | null> {

        return await this.searchField.inputValue();
    }

    public getAutocompleteListSelector() {

        return this.autocompleteListSelector;
    }

    public getAutocompleteLocator(): Locator {

        return this.autocompleteLocator;
    }

    public getAutocompleteList(): AutocompleteList {

        return this.autocompleteList;
    }
}