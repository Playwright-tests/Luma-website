import { Page } from "@playwright/test";

export class BasePage {

    readonly _page: Page;

    constructor(page: Page) {

        this._page = page;
    }

    public async goto(url: string): Promise<void> {

        await this._page.goto(url);
    }

    public get page(): Page {

        return this._page;
    }
}