import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class ShippingAddressForm extends BasePage {

    private readonly regionSelector: string = 'select[name="region_id"]';
    private readonly _emailErrorSelector: string = '#customer-email-error';
    private readonly _firstNameErrorSelector: string = '#error-OCPOKWY';
    private readonly _lastNameErrorSelector: string = '#error-TC9QPN6';
    private readonly _addressErrorSelector: string = '#error-I1C23LP';
    private readonly _cityErrorSelector: string = '#error-QH3QKOM';
    private readonly _regionErrorSelector: string = '#error-EG1Q52C';
    private readonly _postcodeErrorSelector: string = 'error-WIW67KU';
    private readonly _phoneErrorSelector: string = 'error-U3IWX2B';

    constructor(page: Page) {

        super(page);
    }

    private async fillField(label: string, data: string): Promise<void> {

        await this.page.getByLabel(label).fill(data);
    }

    private async getFieldInput(label: string): Promise<string | null> {

        return await this.page.getByLabel(label).inputValue();
    }

    public async enterEmail(email: string): Promise<void> {

        await this.page.getByRole('textbox', {name: 'Email Address * Email Address*'}).fill(email);
    }

    public async enterFirstName(firstName: string): Promise<void> {

        await this.fillField('First Name', firstName);
    }

    public async enterLastName(lastName: string): Promise<void> {

        await this.fillField('Last Name', lastName);
    }

    public async enterCompany(company: string): Promise<void> {

        await this.fillField('Company', company);
    }

    public async enterAddress_1(address: string): Promise<void> {

        await this.fillField('Street Address: Line 1', address);
    }

    public async enterAddress_2(address: string): Promise<void> {

        await this.fillField('Street Address: Line 2', address);
    }

    public async enterAddress_3(address: string): Promise<void> {

        await this.fillField('Street Address: Line 3', address);
    }

    public async enterCity(city: string): Promise<void> {

        await this.fillField('City', city);
    }

    public async enterPostcode(postcode: string): Promise<void> {

        await this.fillField('Zip/Postal Code', postcode);
    }

    public async enterPhone(phone: string): Promise<void> {

        await this.fillField('Phone Number', phone);
    }

    public async selectRegion(region: string): Promise<void> {

        await this.page.locator(this.regionSelector).selectOption(region);
    }

    public async selectCountry(country: string): Promise<void> {

        await this.page.getByLabel('Country').selectOption(country);
    }

    public async getEmailFieldInput(): Promise<string | null> {

        return this.page.getByRole('textbox', {name: 'Email Address * Email Address*'}).inputValue();
    }

    public async getFirstNameFieldInput(): Promise<string | null> {

        return await this.getFieldInput('First Name');
    }

    public async getLastNameFieldInput(): Promise<string | null> {

        return await this.getFieldInput('Last Name');
    }

    public async getCompanyFieldInput(): Promise<string | null> {

        return await this.getFieldInput('Company');
    }

    public async getAddressFieldInput_1(): Promise<string | null> {

        return await this.getFieldInput('Street Address: Line 1');
    }

    public async getAddressFieldInput_2(): Promise<string | null> {

        return await this.getFieldInput('Street Address: Line 2');
    }

    public async getAddressFieldInput_3(): Promise<string | null> {

        return await this.getFieldInput('Street Address: Line 3');
    }

    public async getCityFieldInput(): Promise<string | null> {

        return await this.getFieldInput('City');
    }

    public async getPostcodeFieldInput(): Promise<string | null> {

        return await this.getFieldInput('Zip/Postal Code');
    }

    public async getPhoneFieldInput(): Promise<string | null> {

        return await this.getFieldInput('Phone Number');
    }

    public get emailErrorSelector() : string {
        
        return this._emailErrorSelector;
    }
    
    public get firstNameErrorSelector() : string {
        
        return this._firstNameErrorSelector
    }

    public get lastNameErrorSelector() : string {
        
        return this._lastNameErrorSelector;
    }
    
    public get addressErrorSelector() : string {
        
        return this._addressErrorSelector;
    }
    
    public get cityErrorSelector() : string {
        
        return this._cityErrorSelector;
    }
    
    public get regionErrorSelector() : string {
        
        return this._regionErrorSelector;
    }

    public get postcodeErrorSelector() : string {
        
        return this._postcodeErrorSelector;
    }
    
    public get phoneErrorSelector() : string {
        
        return this._phoneErrorSelector;
    }
    
    public get emailErrorLocator() : Locator {
        
        return this.page.locator(this._emailErrorSelector);
    }

    public get firstNameErrorLocator() : Locator {
        
        return this.page.locator(this._firstNameErrorSelector);
    }

    public get lastNameErrorLocator() : Locator {
        
        return this.page.locator(this._lastNameErrorSelector);
    }

    public get addressErrorLocator() : Locator {
        return this.page.locator(this._addressErrorSelector);
    }
    
    public get cityErrorLocator() : Locator {
        
        return this.page.locator(this._cityErrorSelector);
    }

    public get regionErrorLocator() : Locator {
        
        return this.page.locator(this._regionErrorSelector);
    }

    public get postcodeErrorLocator() : Locator {
        
        return this.page.locator(this._postcodeErrorSelector);
    }

    public get phoneErrorLocator() : Locator {
        
        return this.page.locator(this._phoneErrorSelector);
    }
}