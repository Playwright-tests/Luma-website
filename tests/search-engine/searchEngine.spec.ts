import { FileNames, PropertyNames } from "../../enums/enums";
import { test, expect } from "../../fixtures/searchEngine";
import { expect as NHD_expect } from "../../expect/selectorIsVisible";
import { getStringArray } from "../../testdata-providers/testDataProviders";

const phrases = getStringArray(FileNames.PHRASES, PropertyNames.PHRASES);

test.describe('Search engine',async () => {
    
    test('Input text verification',async ({searchEngine}) => {
        
        const phrase = 'Phrase!!!'

        await test.step(`Enter the "${phrase}" phrase`,async () => {
            
            await searchEngine.enterPhrase(phrase);
        })

        expect(await searchEngine.getInput()).toEqual(phrase);
    })

    for(const phrase of phrases) {

        test(`Autocomplete with "${phrase}" phrase`,async ({searchEngine}) => {
            
            await test.step(`Enter a "${phrase}"`,async () => {
                
                await searchEngine.enterPhrase(phrase);
            })

            await searchEngine.getPage().waitForSelector(searchEngine.getAutocompleteList().getWrapperSelector(), {timeout: 1000});
            searchEngine.getAutocompleteList().findItems();

            await NHD_expect(searchEngine.getPage()).selectorIsVisible(searchEngine.getAutocompleteListSelector());
    
            for(const item of await searchEngine.getAutocompleteList().getItems()) {

                const itemName = await item.textContent() ?? '';
                expect.soft(itemName.toLowerCase()).toContain(phrase.toLowerCase());
            }
        })
    }
})