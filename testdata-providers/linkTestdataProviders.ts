import { LocalTestdataLoader } from "../testdata-loaders/localTestdataLoader";
import {  DropdownListData, SublistData, LinkData } from "../models/models"
import { PropertyNames } from "../enums/enums";

export class LinkTestdataProviders {

    private static source: string;

    public static load(fileName: string) {

        this.source = LocalTestdataLoader.fetch(fileName);
    }

    public static get(propertyName: string) {

        let data: LinkData[] = this.source[propertyName];
        return data;
    }
}

export class DropdownListTestdataProviders {

    public static get() {

        const source: string = LocalTestdataLoader.fetch('links.json');
        const dropdownListData: DropdownListData[] = source[PropertyNames.DROPDOWN_LIST];

        return dropdownListData;
    }
}

export class SublistTestdataProviders {

    public static get(category: string) {

        const source: string = LocalTestdataLoader.fetch('links.json');
        const sublistData: SublistData[] = source[category];

        return sublistData;
    }
}