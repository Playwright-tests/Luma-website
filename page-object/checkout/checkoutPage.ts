import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";
import { ShippingAddressForm } from "./shippingAddressForm";
import { ShippingMethods } from "./shippingMethods";

export class CheckoutPage extends BasePage {

    private readonly nextButton: Locator;

    private readonly _shippingAddressForm: ShippingAddressForm;
    private readonly _shippingMethods: ShippingMethods;

    constructor(page: Page) {

        super(page);

        this._shippingAddressForm = new ShippingAddressForm(page);
        this._shippingMethods = new ShippingMethods(page);

        this.nextButton = page.getByRole('button', {name: 'Next'});
    }

    public async clickNextButton(): Promise<void> {
        
        await this.nextButton.click();
    }

    public get shippingAddressForm(): ShippingAddressForm {

        return this._shippingAddressForm;
    }

    public get shippingMethods(): ShippingMethods {

        return this._shippingMethods;
    }
}