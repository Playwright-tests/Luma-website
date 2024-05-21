import { FileNames, PropertyNames } from "../../enums/enums";
import { test, expect } from "../../fixtures/searchEngine";
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
        })
    }
})