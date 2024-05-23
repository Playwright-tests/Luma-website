import { URLs } from "../../enums/enums";
import { test, expect } from "../../fixtures/shoppingCartThumbnail";

test.use({URL: URLs.GWEN_DRAWSTRING});

test.describe('The shopping cart thumbnail links',async () => {
    
    test('The "View and Edit Cart" link',async ({expanded}) => {
        
        await test.step('Click the "View and Edit Cart" link',async () => {
            
            await expanded.clickCheckoutButton();
        })

        await expect(expanded.page).toHaveURL(URLs.CHECKOUT_PAGE);
    })
})