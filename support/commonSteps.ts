import { allure } from "allure-playwright";

export async function inputVerificationStep(func: any, field: string, data: string) {
    
    await allure.step(`Enter the "${data}" in the "${field}" field`,async () => {
        
        await func();
    })
}