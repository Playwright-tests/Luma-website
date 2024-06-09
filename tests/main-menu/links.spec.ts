import { LinkTestdataProviders } from "../../testdata-providers/linkTestdataProviders";
import { PropertyNames, URLs } from "../../enums/enums";
import { test, expect } from "../../fixtures/menu";
import { allure } from "allure-playwright";
import { takeScreenshot } from "../../support/allure";

LinkTestdataProviders.load('links.json');
const links = LinkTestdataProviders.get(PropertyNames.MAIN_MENU);

test.describe('Main menu links',async () => {
    
    test.beforeEach(async () => {
        
        await allure.owner('Paweł Aksman');
        await allure.tags('Main menu', 'Links');
        await allure.link(URLs.HOME_PAGE, 'Home page');
    })

    for(const link of links) {

        test(`Clicking the "${link.link}" link`,async ({menu}) => {
  
            await allure.severity('critical');
            await allure.description(`Clicking the "${link.link}" link`);

            await allure.step(`Click the "${link.link}"`,async () => {
                
                await takeScreenshot(`link_${link.link}`, menu.getLocator(link.link));
                await menu.click(link.link);
            })

            await expect(menu.page).toHaveURL(link.url);
        })
    }

})