import { test, expect, type Page } from '@playwright/test';
import { getProducts } from '../testdata-providers/productsTesdataProvider';

const products = getProducts();

test('Example',async ({page}) => {
  
    for(const p of products) {

        console.log(p);
    }
})