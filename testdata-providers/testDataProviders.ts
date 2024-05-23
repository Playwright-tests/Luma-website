import { credentials } from "../config/credentials";
import { FileNames } from "../enums/enums";
import { Credentials, LinkData, Product } from "../models/models";
import { LocalTestdataLoader } from "../testdata-loaders/localTestdataLoader";

export function getLinks(key: string) {

    let links: LinkData[];
    const source = LocalTestdataLoader.fetch(FileNames.LINKS);
    links = source[key];
    return links;
}

export function getProducts() {

    let products: Product[];
    const source: string = LocalTestdataLoader.fetch('products.json');
    products = source['products'];
    return products;
}

export function getStringArray(fileName: string, property: string) {

    let stringArray: string[];
    const source: string = LocalTestdataLoader.fetch(fileName);
    stringArray = source[property];
    return stringArray;
}

export function getCorrectCredentials() {

    let myCredentials: Credentials = {

        email: credentials.email!,
        password: credentials.password!
    };

    return myCredentials;
}

export function getIncorrectCredentials(key: string) {

    let credentials: Credentials[];
    const source = LocalTestdataLoader.fetch(FileNames.INCORRECT_CREDENTIALS);
    credentials = source[key];
    return credentials;
}   