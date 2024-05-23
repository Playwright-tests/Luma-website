import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class LoginForm extends BasePage {

    private readonly emailField: Locator;
    private readonly passwordField: Locator;
    private readonly signInButton: Locator;

    private readonly _alertSelector: string = '.message-error.error.message';
    private readonly _emailErrorSelector: string = '#email-error';
    private readonly _passwordErrorSelector: string = '#pass-error';

    constructor(page: Page) {

        super(page);

        this.emailField = page.getByLabel('Email', {exact: true});
        this.passwordField = page.getByLabel('Password');
        this.signInButton = page.getByRole('button', {name: 'Sign In'});
    }

    public async enterEmail(email: string): Promise<void> {

        await this.emailField.fill(email);
    }

    public async enterPassword(password: string): Promise<void> {

        await this.passwordField.fill(password);
    }

    public async getEmailFieldInput(): Promise<string | null> {

        return await this.emailField.inputValue();
    }

    public async getPasswordFieldInput(): Promise<string | null> {

        return await this.passwordField.inputValue();
    }

    public async clickSignInButton(): Promise<void> {

        return await this.signInButton.click();
    }

    public get alertSelector(): string {

        return this._alertSelector;
    }

    public get alertLocator(): Locator {

        return this.getPage().locator(this._alertSelector);
    }

    public get emailErrorSelector(): string {

        return this._emailErrorSelector;
    }

    public get passwordErrorSelector(): string {

        return this._passwordErrorSelector;
    }
}