import { expect, test } from "../../fixtures/menu"; 
import { DropdownListTestdataProviders, SublistTestdataProviders } from "../../testdata-providers/linkTestdataProviders";
import { ListCategory, MenuItem, SublistCategory } from "../../enums/enums";
import { dropdownListSteps, sublistSteps } from "../../support/common-steps/mainMenuSteps";
import { checkExpandingAndCollapsing_1 } from "../../support/common-steps/mainMenuStepsAndAssertions";

const dropdownLists = DropdownListTestdataProviders.get();
const womenSublists = SublistTestdataProviders.get(SublistCategory.WOMEN);
const menSublists = SublistTestdataProviders.get(SublistCategory.MEN);

test.describe('"Women" dropdown lists',async () => {
    
    test('Expanding and collapsing the "Women" dropdown list',async ({menu}) => {
        
        await checkExpandingAndCollapsing_1(menu, dropdownLists[ListCategory.WOMEN].triggerElement, menu.womenListLocator);
    })

    for(const link of dropdownLists[ListCategory.WOMEN].links) {

        test(`Clicking the "${link.link}" link of the "Women" dropdown list`,async ({menu}) => {
            
            await dropdownListSteps(menu, dropdownLists[ListCategory.WOMEN].triggerElement, link.link);
            await expect(menu.page).toHaveURL(link.url);
        })
    }

    for(const link of womenSublists[MenuItem.TOPS].links) {

        test(`Clicking the "${link.link}" of the "${womenSublists[MenuItem.TOPS].triggerElement_2}" trigger element on the "Women" dropdown list`,async ({menu}) => {
            
            await sublistSteps(menu, womenSublists[MenuItem.TOPS].triggerElement_1, womenSublists[MenuItem.TOPS].triggerElement_2, link.link);
            await expect(menu.page).toHaveURL(link.url);
        })
    }

    for(const link of womenSublists[MenuItem.BOTTOMS].links) {

        test(`Clicking the "${link.link}" of the "${womenSublists[MenuItem.BOTTOMS].triggerElement_2}" trigger element on the "Women" dropdown list`,async ({menu}) => {
            
            await sublistSteps(menu, womenSublists[MenuItem.BOTTOMS].triggerElement_1, womenSublists[MenuItem.BOTTOMS].triggerElement_2, link.link);
            await expect(menu.page).toHaveURL(link.url);
        })
    }
})

test.describe('"Men" dropdown list',async () => {
    
    test('Expanding and collapsing the "Men" dropdown list',async ({menu}) => {
        
        await checkExpandingAndCollapsing_1(menu, dropdownLists[ListCategory.MEN].triggerElement, menu.menListLocator);
    })

    for(const link of dropdownLists[ListCategory.MEN].links) {

        test(`Clicking the "${link.link}" link of the "Men" dropdown list`,async ({menu}) => {
            
            await dropdownListSteps(menu, dropdownLists[ListCategory.MEN].triggerElement, link.link);
            await expect(menu.page).toHaveURL(link.url);
        })
    }

    for(const link of menSublists[MenuItem.TOPS].links) {

        test(`Clicking the "${link.link}" of the "${menSublists[MenuItem.TOPS].triggerElement_2}" trigger element on the "Men" dropdown list`,async ({menu}) => {
            
            await sublistSteps(menu, menSublists[MenuItem.TOPS].triggerElement_1, menSublists[MenuItem.TOPS].triggerElement_2, link.link);
            await expect(menu.page).toHaveURL(link.url);
        })
    }

    for(const link of menSublists[MenuItem.BOTTOMS].links) {

        test(`Clicking the "${link.link}" of the "${menSublists[MenuItem.BOTTOMS].triggerElement_2}" trigger element on the "Men" dropdown list`,async ({menu}) => {
            
            await sublistSteps(menu, menSublists[MenuItem.BOTTOMS].triggerElement_1, menSublists[MenuItem.BOTTOMS].triggerElement_2, link.link);
            await expect(menu.page).toHaveURL(link.url);
        })
    }
})

test.describe('"Gear" dropdown list',async () => {
    
    test('Expanding and collapsing the "Gear" dropdown list',async ({menu}) => {
        
        await checkExpandingAndCollapsing_1(menu, dropdownLists[ListCategory.GEAR].triggerElement, menu.gearListLocator);
    })

    for(const link of dropdownLists[ListCategory.GEAR].links) {

        test(`Clicking the "${link.link}" link of the "Gear" dropdown list`,async ({menu}) => {
            
            await dropdownListSteps(menu, dropdownLists[ListCategory.GEAR].triggerElement, link.link);
            await expect(menu.page).toHaveURL(link.url);
        })
    }
})

test.describe('"Training" dropdown list',async () => {
    
    test('Expanding and collapsing the "Training" dropdown list',async ({menu}) => {
        
        await checkExpandingAndCollapsing_1(menu, dropdownLists[ListCategory.TRAINING].triggerElement, menu.trainingListLocator);
    })

    for(const link of dropdownLists[ListCategory.TRAINING].links) {

        test(`Clicking the "${link.link}" link of the "Training" dropdown list`,async ({menu}) => {
            
            await dropdownListSteps(menu, dropdownLists[ListCategory.TRAINING].triggerElement, link.link);
            await expect(menu.page).toHaveURL(link.url);
        })
    }
})