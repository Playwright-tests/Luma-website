import { LinkTestdataProviders } from "../../testdata-providers/linkTestdataProviders";
import { PropertyNames } from "../../enums/enums";
import { test, expect } from "../../fixtures/menu";

LinkTestdataProviders.load('links.json');
const links = LinkTestdataProviders.get(PropertyNames.MAIN_MENU);

test.describe('Main menu links',async () => {
    
    for(const link of links) {

        test(`Clicking the "${link.link}" link`,async ({menu}) => {
            
            await test.step(`Click the "${link.link}"`,async () => {
                
                await menu.click(link.link);
            })

            await expect(menu.page).toHaveURL(link.url);
        })
    }

})