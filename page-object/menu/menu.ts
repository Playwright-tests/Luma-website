import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class Menu extends BasePage {

    private readonly womenListLocator: Locator;
    private readonly menListLocator: Locator;
    private readonly gearListLocator: Locator;
    private readonly trainingListLocator: Locator;

    constructor(page: Page) {

        super(page);

        this.womenListLocator = page.getByText('TopsJacketsHoodies & SweatshirtsTeesBras & TanksBottomsPantsShorts');
        this.menListLocator = page.getByText('TopsJacketsHoodies & SweatshirtsTeesTanksBottomsPantsShorts');
        this.gearListLocator = page.getByText('BagsFitness EquipmentWatches');
        this.trainingListLocator = page.locator('ul').filter({hasText: /^Video Download$/});
    }

    public async click(linkName: string): Promise<void> {

        await this.page.getByRole('menuitem', {name: linkName}).click();
    }

    public async hover(linkName: string): Promise<void> {

        await this.page.getByRole('menuitem', {name: linkName}).hover();
    }

    public getWomenListLocator(): Locator {

        return this.womenListLocator;
    }

    public getMenListLocator(): Locator {

        return this.menListLocator;
    }

    public getGearListLocator(): Locator {

        return this.gearListLocator;
    }

    public getTrainingListLocator() {

        return this.trainingListLocator;
    }
}