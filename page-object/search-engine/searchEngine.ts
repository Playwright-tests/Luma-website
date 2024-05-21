import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class SearchEngine extends BasePage {

    private readonly searchField: Locator;

    constructor(page: Page) {

        super(page);

        this.searchField = page.locator('#search');
    }

    public async enterPhrase(phrase: string): Promise<void> {

        await this.searchField.fill(phrase);
    }

    public async getInput(): Promise<string | null> {

        return await this.searchField.inputValue();
    }
}