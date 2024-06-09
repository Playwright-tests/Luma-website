import { expect as baseExpect, Page } from "@playwright/test";

export const expect = baseExpect.extend({

    async selectorIsVisible(page: Page, selector: string) {
        
        const assertionName = 'Is selector visible';
        let pass: boolean;

        try {
            await page.waitForSelector(selector, {state: 'visible', timeout: 10000});
            pass = true
        } catch (e: any) {
            pass = false;
        }

        const message = pass ? () => 'The selector "' + selector + '" is visible' :
                               () => 'The selector "' + selector + '" is not visible';
                               
        return {
            name: assertionName,
            pass,
            message
        }
    }
})