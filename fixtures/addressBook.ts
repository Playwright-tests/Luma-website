import { test as base } from "@playwright/test";
import { AddressBook } from "../page-object/address-book/addressBook";
import { authentication } from "../support/authentication";
import { URLs } from "../enums/enums";

export { expect } from "@playwright/test";

export const test = base.extend<{addressBook: AddressBook}>({

    addressBook:async ({page}, use) => {
        
        const addressBook = new AddressBook(page);

        await authentication(page);
        await addressBook.goto(URLs.ADDRESS_BOOK);
        await use(addressBook);
    }
})