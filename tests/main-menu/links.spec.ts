import { LinkTestdataProviders } from "../../testdata-providers/linkTestdataProviders";
import { PropertyNames } from "../../enums/enums";
import { test, expect } from "../../fixtures/mainMenu";

LinkTestdataProviders.load('links.json');
const links = LinkTestdataProviders.get(PropertyNames.MAIN_MENU);

test.describe('Main menu links',async () => {
    
    for(const link of links) {

        test(`Clicking the "${link.link}"`,async ({mainMenu}) => {
            
            await test.step('Click the "' + link.link + '"',async () => {
                
                await mainMenu.clickLink(link.link);
            })

            await expect(mainMenu.getPage()).toHaveURL(link.url);
        })
    }

})