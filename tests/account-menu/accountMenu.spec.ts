import { PropertyNames } from "../../enums/enums";
import { expect, test } from "../../fixtures/accountMenu";
import { getLinks } from "../../testdata-providers/testDataProviders";

const links = getLinks(PropertyNames.ACCOUNT_MENU);

test.describe('The account menu',async () => {
    
    for(const link of links) {

        test.only(`Clicking the "${link.link}" link`,async ({accountMenu}) => {
            
            await test.step(`Click the "${link.link}" link`,async () => {
                
                await accountMenu.clickLink(link.link);
            })

            await expect(accountMenu.page).toHaveURL(link.url);
        })
    }
})