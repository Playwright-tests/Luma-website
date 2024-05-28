import { allure } from "allure-playwright";
import { PropertyNames, URLs } from "../../enums/enums";
import { expect, test } from "../../fixtures/accountMenu";
import { getLinks } from "../../testdata-providers/testDataProviders";
import { addParameters, takeScreenshot } from "../../support/allure";

const links = getLinks(PropertyNames.ACCOUNT_MENU);

test.describe('The account menu',async () => {
    
    test.beforeEach(async () => {
        
        await allure.owner('Paweł Aksman');
        await allure.tags('Account', 'Menu', 'Links');
    })

    for(const link of links) {

        test(`Clicking the "${link.link}" link`,async ({accountMenu}) => {
            
            await allure.severity('critical');
            await allure.feature(`Opening the ${link.url} page`);
            await allure.link('Account page', URLs.ACCOUNT_PAGE);
            await addParameters(new Map<string, string>([['Link', link.link]]));

            await allure.step(`Click the "${link.link}" link`,async () => {
                
                await takeScreenshot('link', accountMenu.getLinkLocator(link.link));
                await accountMenu.clickLink(link.link);
            })

            await expect(accountMenu.page).toHaveURL(link.url);
        })
    }
})