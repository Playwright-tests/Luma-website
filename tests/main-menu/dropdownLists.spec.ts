import { expect, test } from "../../fixtures/mainMenu"; 
import { dropdownListSteps, sublistSteps } from "./steps";
import { DropdownListTestdataProviders, SublistTestdataProviders } from "../../testdata-providers/linkTestdataProviders";
import { ListCategory, MenuItem, SublistCategory } from "../../enums/enums";

const dropdownLists = DropdownListTestdataProviders.get();
const womenSublists = SublistTestdataProviders.get(SublistCategory.WOMEN);
const menSublists = SublistTestdataProviders.get(SublistCategory.MEN);

test.describe('Women dropdown lists',async () => {
    
    for(const link of dropdownLists[ListCategory.WOMEN].links) {

        test(`Clicking the "${link.link}" link of the women dropdown list`,async ({mainMenu}) => {
            
            await dropdownListSteps(mainMenu, dropdownLists[ListCategory.WOMEN].triggerElement, link.link);
            await expect(mainMenu.getPage()).toHaveURL(link.url);
        })
    }

    for(const link of womenSublists[MenuItem.TOPS].links) {

        test(`Clicking the "${link.link}" of the "` + womenSublists[MenuItem.TOPS].triggerElement_2 + '" trigger element on the women dropdown list',async ({mainMenu}) => {
            
            await sublistSteps(mainMenu, womenSublists[MenuItem.TOPS].triggerElement_1, womenSublists[MenuItem.TOPS].triggerElement_2, link.link);
            await expect(mainMenu.getPage()).toHaveURL(link.url);
        })
    }

    for(const link of womenSublists[MenuItem.BOTTOMS].links) {

        test(`Clicking the "${link.link}" of the "` + womenSublists[MenuItem.BOTTOMS].triggerElement_2 + '" trigger element on the women dropdown list',async ({mainMenu}) => {
            
            await sublistSteps(mainMenu, womenSublists[MenuItem.BOTTOMS].triggerElement_1, womenSublists[MenuItem.BOTTOMS].triggerElement_2, link.link);
            await expect(mainMenu.getPage()).toHaveURL(link.url);
        })
    }
})

test.describe('Men dropdown list',async () => {
    
    for(const link of dropdownLists[ListCategory.MEN].links) {

        test(`Clicking the "${link.link}" link of the women dropdown list`,async ({mainMenu}) => {
            
            await dropdownListSteps(mainMenu, dropdownLists[ListCategory.MEN].triggerElement, link.link);
            await expect(mainMenu.getPage()).toHaveURL(link.url);
        })
    }

    for(const link of menSublists[MenuItem.TOPS].links) {

        test(`Clicking the "${link.link}" of the "${menSublists[MenuItem.TOPS].triggerElement_2}" trigger element on the men dropdown list`,async ({mainMenu}) => {
            
            await sublistSteps(mainMenu, menSublists[MenuItem.TOPS].triggerElement_1, menSublists[MenuItem.TOPS].triggerElement_2, link.link);
            await expect(mainMenu.getPage()).toHaveURL(link.url);
        })
    }

    for(const link of menSublists[MenuItem.BOTTOMS].links) {

        test(`Clicking the "${link.link}" of the "${menSublists[MenuItem.BOTTOMS].triggerElement_2}" trigger element on the men dropdown list`,async ({mainMenu}) => {
            
            await sublistSteps(mainMenu, menSublists[MenuItem.BOTTOMS].triggerElement_1, menSublists[MenuItem.BOTTOMS].triggerElement_2, link.link);
            await expect(mainMenu.getPage()).toHaveURL(link.url);
        })
    }
})