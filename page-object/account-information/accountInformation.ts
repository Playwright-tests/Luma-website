import { Page } from "@playwright/test";
import { BasePage } from "../base/basePage";
import { ChangeEmailForm } from "./changeEmailForm";
import { ChangePasswordForm } from "./changePasswordForm";

export class AccountInformation extends BasePage {

    private readonly _changeEmailForm: ChangeEmailForm;
    private readonly _changePasswordForm: ChangePasswordForm;

    private readonly firstNameLabelName: string = 'First Name';
    private readonly lastNameLabelName: string = 'Last Name';
    private readonly changeEmailCheckboxLabelName: string = 'Change Email';
    private readonly changePasswordCheckboxLabelName: string = 'Change Password';

    constructor(page: Page) {

        super(page);

        this._changeEmailForm = new ChangeEmailForm(page);
        this._changePasswordForm = new ChangePasswordForm(page);
    }

    private async fillField(label: string, data: string): Promise<void> {

        await this.page.getByLabel(label).fill(data);
    }

    private async clickCheckbox(labelName: string): Promise<void> {

        await this.page.getByLabel(labelName, {exact: true}).check();
    }

    private async getFieldInput(label: string): Promise<string | null> {

        return await this.page.getByLabel(label).inputValue();
    }

    public async enterFirstName(firstName: string): Promise<void> {

        await this.fillField(this.firstNameLabelName, firstName);
    }

    public async enterLastName(lastName: string): Promise<void> {

        await this.fillField(this.lastNameLabelName, lastName);
    }

    public async getFirstNameFieldInput(): Promise<string | null> {

        return await this.getFieldInput(this.firstNameLabelName);
    }

    public async getLastNameFieldInput(): Promise<string | null> {

        return await this.getFieldInput(this.lastNameLabelName);
    }

    public async clickChangeEmailCheckbox(): Promise<void> {

        await this.clickCheckbox(this.changeEmailCheckboxLabelName);
    }

    public async clickChangePasswordCheckbox(): Promise<void> {

        await this.clickCheckbox(this.changePasswordCheckboxLabelName);
    }

    public get changeEmailForm(): ChangeEmailForm {

        return this._changeEmailForm;
    }

    public get changePasswordForm(): ChangePasswordForm {

        return this._changePasswordForm;
    }
}