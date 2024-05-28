import { SearchEngine } from "../../page-object/search-engine/searchEngine";
import { allure } from "allure-playwright";

export async function searchProductSteps(searchEngine: SearchEngine, phrase: string) {
    
    await allure.step(`Enter the "${phrase}" phrase`,async () => {
        
        await searchEngine.enterPhrase(phrase);
    })

    await allure.step('Press the ENTER key',async () => {
        
        await searchEngine.page.keyboard.press('Enter');
    })

}