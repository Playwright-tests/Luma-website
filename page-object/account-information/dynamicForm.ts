import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class DynamicForm extends BasePage {

    private readonly _mainSelector: string = 'fieldset.fieldset.password';

    constructor(page: Page) {

        super(page);
    }

    protected async fillField(label: string, data: string): Promise<void> {

        await this.getPage().getByLabel(label, {exact: true}).fill(data);
    }

    protected async getFieldInput(label: string): Promise<string | null> {

        return await this.getPage().getByLabel(label, {exact: true}).inputValue();
    }

    public get mainSelector(): string {

        return this._mainSelector;
    }
}