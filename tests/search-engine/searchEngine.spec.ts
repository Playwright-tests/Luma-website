import { FileNames, PropertyNames, URLs } from "../../enums/enums";
import { test, expect } from "../../fixtures/searchEngine";
import { expect as NHD_expect } from "../../expect/selectorIsVisible";
import { getStringArray } from "../../testdata-providers/testDataProviders";
import { SearchResultsPage } from "../../page-object/search-results-page/searchResultsPage";
import { inputVerificationStep } from "../../support/commonSteps";
import { searchProductSteps } from "../../support/common-steps/searchEngineSteps";

const correctPhrases = getStringArray(FileNames.PHRASES, PropertyNames.CORRECT_PHRASES);
const incorrectPhrases = getStringArray(FileNames.PHRASES, PropertyNames.INCORRECT_PHRASES);

test.describe('Search engine',async () => {
    
    let searchResultsPage: SearchResultsPage;

    test.beforeEach(async ({searchEngine}) => {
        
        searchResultsPage = new SearchResultsPage(searchEngine.page);
    })

    test('Input text verification',async ({searchEngine}) => {
        
        const phrase = 'Phrase!!!'

        await inputVerificationStep(async () => {
            await searchEngine.enterPhrase(phrase);
        }, 'search engine', phrase);
        
        expect(await searchEngine.getInput()).toEqual(phrase);
    })

    for(const phrase of correctPhrases) {

        test(`Autocomplete with "${phrase}" phrase`,async ({searchEngine}) => {
            
            await test.step(`Enter a "${phrase}"`,async () => {
                
                await searchEngine.enterPhrase(phrase);
            })

            await searchEngine.page.waitForSelector(searchEngine.getAutocompleteList().wrapperSelector, {timeout: 1000});
            searchEngine.getAutocompleteList().findItems();

            await NHD_expect(searchEngine.page).selectorIsVisible(searchEngine.getAutocompleteListSelector());
    
            for(const item of await searchEngine.getAutocompleteList().items) {

                const itemName = await item.textContent() ?? '';
                expect.soft(itemName.toLowerCase()).toContain(phrase.toLowerCase());
            }
        })
    }

    for(const phrase of correctPhrases) {

        test(`Searching with correct phrase: "${phrase}"`,async ({searchEngine}) => {
            
            await searchProductSteps(searchEngine, phrase);
            await searchEngine.page.waitForURL(URLs.SEARCH_RESULTS_PAGE + phrase, {timeout: 2000});
            searchResultsPage.findProducts();

            expect((await searchResultsPage.getItems()).length).toBeGreaterThan(0);
        })
    }

    for(const phrase of incorrectPhrases) {

        test(`Searching with incorrect phrase: "${phrase}"`,async ({searchEngine}) => {
            
            const expectedMessage = 'Your search returned no results.'
            await searchProductSteps(searchEngine, phrase);
            
            await NHD_expect(searchResultsPage.page).selectorIsVisible(searchResultsPage.getMessageSelector());

            searchResultsPage.findProducts();
            const actualMessage = await searchResultsPage.getMessageLocator().textContent() ?? '';

            expect((await searchResultsPage.getItems()).length).toEqual(0);
            expect(actualMessage.trim()).toEqual(expectedMessage);
        })
    }
})