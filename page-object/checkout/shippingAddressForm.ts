import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";

export class ShippingAddressForm extends BasePage {

    private readonly firstNameLabelName: string = 'First Name';
    private readonly lastNameLabelName: string = 'Last Name';
    private readonly companyLabelName: string = 'Company';
    private readonly addressLabelName_1: string = 'Street Address: Line 1';
    private readonly addressLabelName_2: string = 'Street Address: Line 2';
    private readonly addressLabelName_3: string = 'Street Address: Line 3';
    private readonly cityLabelName: string = 'City';
    private readonly postcodeLabelName: string = 'ZIP/Postal Code';
    private readonly phoneLabelName: string = 'Phone Number';

    private readonly regionSelector: string = 'select[name="region_id"]';
    private readonly _emailErrorSelector: string = '#customer-email-error';

    constructor(page: Page) {

        super(page);
    }

    private getErrorSelector(field: string): string {

        return `div[name="shippingAddress.${field}"] span[data-bind="text: element.error"]`;
    }

    private async fillField(label: string, data: string): Promise<void> {

        await this.page.getByLabel(label).fill(data);
    }

    private async getFieldInput(label: string): Promise<string | null> {

        return await this.page.getByLabel(label).inputValue();
    }

    private getFieldLocator(label: string): Locator {

        return this.page.getByLabel(label);
    }

    public async enterEmail(email: string): Promise<void> {

        await this.page.getByRole('textbox', {name: 'Email Address * Email Address*'}).fill(email);
    }

    public async enterFirstName(firstName: string): Promise<void> {

        await this.fillField(this.firstNameLabelName, firstName);
    }

    public async enterLastName(lastName: string): Promise<void> {

        await this.fillField(this.lastNameLabelName, lastName);
    }

    public async enterCompany(company: string): Promise<void> {

        await this.fillField(this.companyLabelName, company);
    }

    public async enterAddress_1(address: string): Promise<void> {

        await this.fillField(this.addressLabelName_1, address);
    }

    public async enterAddress_2(address: string): Promise<void> {

        await this.fillField(this.addressLabelName_2, address);
    }

    public async enterAddress_3(address: string): Promise<void> {

        await this.fillField(this.addressLabelName_3, address);
    }

    public async enterCity(city: string): Promise<void> {

        await this.fillField(this.cityLabelName, city);
    }

    public async enterPostcode(postcode: string): Promise<void> {

        await this.fillField(this.postcodeLabelName, postcode);
    }

    public async enterPhone(phone: string): Promise<void> {

        await this.fillField(this.phoneLabelName, phone);
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

        return await this.getFieldInput(this.firstNameLabelName);
    }

    public async getLastNameFieldInput(): Promise<string | null> {

        return await this.getFieldInput(this.lastNameLabelName);
    }

    public async getCompanyFieldInput(): Promise<string | null> {

        return await this.getFieldInput(this.companyLabelName);
    }

    public async getAddressFieldInput_1(): Promise<string | null> {

        return await this.getFieldInput(this.addressLabelName_1);
    }

    public async getAddressFieldInput_2(): Promise<string | null> {

        return await this.getFieldInput(this.addressLabelName_2);
    }

    public async getAddressFieldInput_3(): Promise<string | null> {

        return await this.getFieldInput(this.addressLabelName_3);
    }

    public async getCityFieldInput(): Promise<string | null> {

        return await this.getFieldInput(this.cityLabelName);
    }

    public async getPostcodeFieldInput(): Promise<string | null> {

        return await this.getFieldInput(this.postcodeLabelName);
    }

    public async getPhoneFieldInput(): Promise<string | null> {

        return await this.getFieldInput(this.phoneLabelName);
    }

    public get emailErrorSelector() : string {
        
        return this._emailErrorSelector;
    }
    
    public get firstNameErrorSelector() : string {
        
        return this.getErrorSelector('firstname');
    }

    public get lastNameErrorSelector() : string {
        
        return this.getErrorSelector('lastname');
    }
    
    public get addressErrorSelector() : string {
        
        return this.getErrorSelector('street.0');
    }
    
    public get cityErrorSelector() : string {
        
        return this.getErrorSelector('city');
    }
    
    public get regionErrorSelector() : string {
        
        return this.getErrorSelector('region_id');
    }

    public get postcodeErrorSelector() : string {
        
        return this.getErrorSelector('postcode');
    }
    
    public get phoneErrorSelector() : string {
        
        return this.getErrorSelector('telephone');
    }

    public get emailFieldLocator(): Locator {

        return this.page.getByRole('textbox', {name: 'Email Address * Email Address*'});
    }

    public get firstNameFieldLocator(): Locator {

        return this.getFieldLocator(this.firstNameLabelName);        
    }

    public get lastNameFieldLocator(): Locator {

        return this.getFieldLocator(this.lastNameLabelName);        
    }

    public get companyFieldLocator(): Locator {

        return this.getFieldLocator(this.companyLabelName)
    }

    public get addressFieldLocator_1(): Locator {

        return this.getFieldLocator(this.addressLabelName_1);
    }

    public get addressFieldLocator_2(): Locator {

        return this.getFieldLocator(this.addressLabelName_2);
    }

    public get addressFieldLocator_3(): Locator {

        return this.getFieldLocator(this.addressLabelName_3);
    }

    public get cityFieldLocator(): Locator {

        return this.getFieldLocator(this.cityLabelName);
    }

    public get postcodeFieldLocator(): Locator {

        return this.getFieldLocator(this.postcodeLabelName);
    }

    public get phoneFieldLocator(): Locator {

        return this.getFieldLocator(this.phoneLabelName);
    }
}