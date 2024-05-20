import { Product } from "../models/models";
import { LocalTestdataLoader } from "../testdata-loaders/localTestdataLoader";

export function getProducts() {

    let products: Product[];
    const source: string = LocalTestdataLoader.fetch('products.json');
    products = source['products'];
    return products;
}

export function getStringArray(fileName: string, property: string) {

    let stringArray: string[];
    const source: string = LocalTestdataLoader.fetch('quantities.json');
    stringArray = source[property];
    return stringArray;
}