import { test } from "@playwright/test";

export async function inputVerificationStep(func: any, data: string) {
    
    await test.step(`Enter the "${data}"`,async () => {
        
        await func();
    })
}