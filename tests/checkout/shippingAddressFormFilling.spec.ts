import { test, expect } from "../../fixtures/checkout";
import { ShippingAddressForm } from "../../page-object/checkout/shippingAddressForm";
import { shippingAddressFormSteps } from "../../support/common-steps/checkoutSteps";
import { getIncorrectShippingAddressDatas, getProducts, getShippingAddress } from "../../testdata-providers/testDataProviders";

const product = getProducts()[0];
const shippingAddress = getShippingAddress();
const incorrectDatas = getIncorrectShippingAddressDatas();

test.use({product: product, filled: false});

test.describe('Filline the shipping address form',async () => {
    
    async function incorrectDataActions(shippingAddressForm: ShippingAddressForm, property: string) {
        
        shippingAddress[property] = incorrectDatas[property];
        await shippingAddressFormSteps(shippingAddressForm, shippingAddress);
        await shippingAddressForm.page.waitForTimeout(7000);
    }

    async function blankFieldActions(shippingAddressForm: ShippingAddressForm, property: string) {
        
        shippingAddress[property] = '';
        await shippingAddressFormSteps(shippingAddressForm, shippingAddress);
    }

    test.only('Filling the shiping address form with correct data',async ({checkoutpage}) => {
        
        await shippingAddressFormSteps(checkoutpage.shippingAddressForm, shippingAddress);
    })

    test.only('Incorrect first name',async ({checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage.shippingAddressForm, 'firstName');
    })

    test.only('Incorrect last name',async ({checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage.shippingAddressForm, 'lastName');
    })

    test.only('Incorrect address line 1',async ({checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage.shippingAddressForm, 'address_1');
    })

    test.only('Incorrect address line 2',async ({checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage.shippingAddressForm, 'address_2');
    })

    test.only('Incorrect address line 3',async ({checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage.shippingAddressForm, 'address_3');
    })

    test.only('Incorrect city',async ({checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage.shippingAddressForm, 'city');
    })

    test.only('Incorrect postcode',async ({checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage.shippingAddressForm, 'postcode');
    })

    test.only('Incorrect phone number',async ({checkoutpage}) => {
        
        await incorrectDataActions(checkoutpage.shippingAddressForm, 'phone');
    })
})