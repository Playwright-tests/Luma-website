import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/basePage";
import { ShippingAddressForm } from "./shippingAddressForm";
import { ShippingMethods } from "./shippingMethods";

export class CheckoutPage extends BasePage {

    private readonly _nextButton: Locator;
    private readonly _paymentGroupSelector: string = 'div.payment-group';

    private readonly _shippingAddressForm: ShippingAddressForm;
    private readonly _shippingMethods: ShippingMethods;

    constructor(page: Page) {

        super(page);

        this._shippingAddressForm = new ShippingAddressForm(page);
        this._shippingMethods = new ShippingMethods(page);

        this._nextButton = page.getByRole('button', {name: 'Next'});
    }

    public async clickNextButton(): Promise<void> {
        
        await this._nextButton.click();
    }

    public get shippingAddressForm(): ShippingAddressForm {

        return this._shippingAddressForm;
    }

    public get shippingMethods(): ShippingMethods {

        return this._shippingMethods;
    }

    public get paymentGroupSelector(): string {

        return this._paymentGroupSelector;
    }

    public get nextButtonLocator(): Locator {

        return this._nextButton;
    }
}