import { test, expect } from "../../fixtures/shoppingCartThumbnail";
import { expect as VEExpect } from "../../expect/selectorIsVisible";
import { Header } from "../../page-object/header/header";
import { URLs } from "../../enums/enums";

test.describe('The shopping cart thumbnail',async () => {

    test('Expanding the thumbnail',async ({unexpanded}) => {
        
        const header = new Header(unexpanded.getPage());

        await test.step('Click the shopping cart button',async () => {
            
            await header.clickShoppingCartButton();
        })

        await VEExpect(unexpanded.getPage()).selectorIsVisible(unexpanded.getSelector());
    })
})