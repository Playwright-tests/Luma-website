import { test } from "@playwright/test";

export async function radioButtonSteps(func: any, radioButtonName: string) {
    
    await test.step(`Click the "${radioButtonName}" radio button`,async () => {
        
        await func();
    })
}