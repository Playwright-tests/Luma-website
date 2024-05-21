import { test as base } from "@playwright/test";
import { SearchEngine } from "../page-object/search-engine/searchEngine";
import { URLs } from "../enums/enums";

export { expect } from "@playwright/test";

export const test = base.extend<{searchEngine: SearchEngine}>({

    searchEngine:async ({page}, use) => {
        
        const searchEngine = new SearchEngine(page);
        await searchEngine.goto(URLs.HOME_PAGE);

        await use(searchEngine);
    }
})
