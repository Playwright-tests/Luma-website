import test from "@playwright/test";

export async function inputVerificationStep(func: any, field: string, data: string) {
    
    await test.step(`Enter the "${data}" in the "${field}" field`,async () => {
        
        await func();
    })
}