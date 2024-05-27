import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class ShippingMethods extends BasePage {

    constructor(page: Page) {

        super(page);
    }

    public async clickFixedRadioButton(): Promise<void> {

        await this.page.getByLabel('Fixed').click();
    }

    public async clickTableRateRadioButton(): Promise<void> {

        await this.page.getByLabel('Table Rate').click();
    }
    
    public get fixedRadioButtonLocator(): Locator {
        
        return this.page.getByLabel('Fixed');
    }
    
    public get tableRateRadioButtonLocator(): Locator {

        return this.page.getByLabel('Table Rate');
    }
}