import { credentials } from "../config/credentials";
import { FileNames, PropertyNames } from "../enums/enums";
import { Credentials, LinkData, Product, ShippingAddress, ShippingAddressIncorrect } from "../models/models";
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

export function getShippingAddress() {

    let shippingAddress: ShippingAddress;
    const source = LocalTestdataLoader.fetch(FileNames.SHIPPING_ADDRESS);
    shippingAddress = source[PropertyNames.CORRECT];
    return shippingAddress;
}

export function getIncorrectShippingAddressDatas() {

    let incorrectDatas: ShippingAddressIncorrect;
    const source = LocalTestdataLoader.fetch(FileNames.SHIPPING_ADDRESS_INCORRECT);
    incorrectDatas = source[PropertyNames.INCORRECT];
    return incorrectDatas;
}