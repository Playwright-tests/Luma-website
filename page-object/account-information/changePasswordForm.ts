import { Locator, Page } from "@playwright/test";
import { DynamicForm } from "./dynamicForm";

export class ChangePasswordForm extends DynamicForm {

    private readonly currentPasswordLabelName: string = 'Current Password';
    private readonly newPasswordLabelName: string = 'New Password';

    constructor(page: Page) {
        
        super(page);
    }

    public async enterCurrentPassword(currentPassword: string): Promise<void> {

        await this.fillField(this.currentPasswordLabelName, currentPassword);
    }

    public async enterNewPassword(newPassword: string): Promise<void> {

        await this.fillField(this.newPasswordLabelName, newPassword);
    }

    public async getCurrentPasswordFieldInput(): Promise<string | null> {

        return await this.getFieldInput(this.currentPasswordLabelName);
    }

    public async getNewPasswordFieldInput(): Promise<string | null> {

        return await this.getFieldInput(this.newPasswordLabelName);
    }

    public get currentPasswordFieldLocator(): Locator {

        return this.getFieldLocator(this.currentPasswordLabelName);
    }

    public get newPasswordFieldLocator(): Locator {

        return this.getFieldLocator(this.newPasswordLabelName);
    }
}