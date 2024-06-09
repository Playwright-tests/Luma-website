import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class Menu extends BasePage {

    private readonly _womenListLocator: Locator;
    private readonly _menListLocator: Locator;
    private readonly _gearListLocator: Locator;
    private readonly _trainingListLocator: Locator;

    constructor(page: Page) {

        super(page);

        this._womenListLocator = page.getByText('TopsJacketsHoodies & SweatshirtsTeesBras & TanksBottomsPantsShorts');
        this._menListLocator = page.getByText('TopsJacketsHoodies & SweatshirtsTeesTanksBottomsPantsShorts');
        this._gearListLocator = page.getByText('BagsFitness EquipmentWatches');
        this._trainingListLocator = page.locator('ul').filter({hasText: /^Video Download$/});
    }

    public async click(linkName: string): Promise<void> {

        await this.page.getByRole('menuitem', {name: linkName}).click();
    }

    public async hover(linkName: string): Promise<void> {

        await this.page.getByRole('menuitem', {name: linkName}).hover();
    }

    public getLocator(linkName: string): Locator {

        return this.page.getByRole('menuitem', {name: linkName});
    }

    public get womenListLocator(): Locator {

        return this._womenListLocator;
    }

    public get menListLocator(): Locator {

        return this._menListLocator;
    }

    public get gearListLocator(): Locator {

        return this._gearListLocator;
    }

    public get trainingListLocator() {

        return this._trainingListLocator;
    }
}