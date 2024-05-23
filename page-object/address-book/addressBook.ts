import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class AddressBook extends BasePage {

    private readonly firstNameSelector: string = '#firstname';
    private readonly lastNameSelector: string = '#lastname'
    private readonly companySelector: string = '#company';
    private readonly phoneSelector: string = '#telephone';
    private readonly addressSelector_1: string = '#street_1';
    private readonly addressSelector_2: string = '#street_2'
    private readonly addressSelector_3: string = '#street_3';
    private readonly citySelector: string = '#city';
    private readonly postcodeSelector: string ='#zip';

    private readonly _firstNameErrorSelector: string = '#firstname-error';
    private readonly _lastNameErrorSelector: string = '#lastname-error';
    private readonly _phoneErrorSelector: string ='#telephone-error';
    private readonly _addressErrorSelector_1: string = '#street_1-error';
    private readonly _cityErrorSelector: string = '#city-error';
    private readonly _postcodeErrorSelector: string = '#zip-error';
    private readonly _regionErrorSelector: string = '#region_id-error';
    private readonly _postcodeWarningSelector: string = 'div.message.warning';

    constructor(page: Page) {

        super(page);
    }

    private async fillField(selector: string, data: string): Promise<void> {

        await this.page.locator(selector).fill(data);
    }

    private async select(label: string, value: string) {

        await this.page.getByLabel(label).selectOption(value);
    }

    public async enterFirstName(firstName: string): Promise<void> {

        await this.fillField(this.firstNameSelector, firstName);
    }

    public async enterLastname(lastName: string): Promise<void> {

        await this.fillField(this.lastNameSelector, lastName);
    }

    public async enterCompany(company: string): Promise<void> {

        await this.fillField(this.companySelector, company);
    }

    public async enterPhone(phone: string): Promise<void> {

        await this.fillField(this.phoneSelector, phone);
    }

    public async enterAddress_1(address: string): Promise<void> {

        await this.fillField(this.addressSelector_1, address);
    }

    public async enterAddress_2(address: string): Promise<void> {

        await this.fillField(this.addressSelector_2, address);
    }

    public async enterAddress_3(address: string): Promise<void> {

        await this.fillField(this.addressSelector_3, address);
    }

    public async enterCity(city: string): Promise<void> {

        await this.fillField(this.citySelector, city);
    }

    public async enterPostcode(postcode: string): Promise<void> {

        await this.fillField(this.postcodeSelector, postcode);
    }

    public async selectRegion(region: string): Promise<void> {

        await this.select('State/Province', region);
    }

    public async selectCountry(country: string): Promise<void> {

        await this.select('Country', country);
    }

    public async clickSaveAddressButton(): Promise<void> {

        return await this.page.getByRole('button', {name: 'Save Address'}).click();
    }

    public async getFirstNameFieldInput(): Promise<string | null> {

        return await this.page.locator(this.firstNameSelector).inputValue();
    }

    public async getLastNameFieldInput(): Promise<string | null> {

        return await this.page.locator(this.lastNameSelector).inputValue();
    }

    public async getCompanyFieldInput(): Promise<string | null> {

        return await this.page.locator(this.companySelector).inputValue();
    }

    public async getPhoneFieldInput(): Promise<string | null> {

        return await this.page.locator(this.phoneSelector).inputValue();
    }

    public async getAddressFieldInput_1(): Promise<string | null> {

        return await this.page.locator(this.addressSelector_1).inputValue();
    }

    public async getAddressFieldInput_2(): Promise<string | null> {

        return await this.page.locator(this.addressSelector_2).inputValue();
    }

    public async getAddressFieldInput_3(): Promise<string | null> {

        return await this.page.locator(this.addressSelector_3).inputValue();
    }

    public async getCityFieldInput(): Promise<string | null> {

        return await this.page.locator(this.citySelector).inputValue();
    }

    public async getPostcodeFieldInput(): Promise<string | null> {

        return await this.page.locator(this.postcodeSelector).inputValue();
    }

    public get firstNameErrorSelector(): string {

        return this._firstNameErrorSelector;
    }

    public get lastNameErrorSelector(): string {
    
        return this._lastNameErrorSelector;
    }

    public get phoneErrorSelector(): string {

        return this._phoneErrorSelector;
    }

    public get addressErrorSelector(): string {

        return this._addressErrorSelector_1;
    }

    public get cityErrorSelector(): string {

        return this._cityErrorSelector;
    }

    public get postcodeErrorSelector(): string {

        return this._postcodeErrorSelector;
    }

    public get regionErrorSelector(): string {

        return this._regionErrorSelector;
    }

    public get postcodeWarningSelector(): string {

        return this._postcodeWarningSelector;
    }

    public get firstNameErrorLocator(): Locator {

        return this.page.locator(this.firstNameErrorSelector);
    }

    public get lastNameErrorLocator(): Locator {

        return this.page.locator(this.lastNameErrorSelector);
    }

    public get phoneErrorLocator(): Locator {

        return this.page.locator(this.phoneErrorSelector);
    }

    public get addressErrorLocator_1(): Locator {

        return this.page.locator(this._addressErrorSelector_1);
    }

    public get cityErrorLocator(): Locator {

        return this.page.locator(this.cityErrorSelector);
    }

    public get postcodeErrorLocator(): Locator {

        return this.page.locator(this.postcodeErrorSelector);
    }

    public get regionErrorLocator(): Locator {

        return this.page.locator(this.regionErrorSelector);
    }

    public get postcodeWarningLocator(): Locator {

        return this.page.locator(this._postcodeWarningSelector);
    }
}