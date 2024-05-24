import { Page } from "@playwright/test";
import { DynamicForm } from "./dynamicForm";

export class ChangeEmailForm extends DynamicForm {

    private readonly emailLabelName: string = 'Email';
    private readonly passwordLabelName: string = 'Current Password';

    constructor(page: Page) {

        super(page);
    }

    public async enterEmail(email: string): Promise<void> {

        await this.fillField(this.emailLabelName, email);
    }

    public async enterPassword(password: string): Promise<void> {

        await this.fillField(this.passwordLabelName, password);
    }

    public async getEmailFieldInput(): Promise<string | null> {

        return await this.getFieldInput(this.emailLabelName);
    }

    public async getPasswordFieldInput(): Promise<string | null> {

        return await this.getFieldInput(this.passwordLabelName);
    }
}