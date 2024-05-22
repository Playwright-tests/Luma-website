import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class LoginForm extends BasePage {

    private readonly emailField: Locator;
    private readonly passwordField: Locator;
    private readonly signInButton: Locator;

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
}