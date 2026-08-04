import HomePage from "../../page-objects/pages/HomePage";
import SignInForm from "../../page-objects/forms/SignInForm";

describe("Form validation", () => {

    beforeEach(async () => {
        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await HomePage.openSignInForm();
    })

    it("Email field - empty", async () => {
        await SignInForm.setEmail("");
        await SignInForm.clickEmailLabel();

        await expect(await SignInForm.getEmailErrorMessageText()).toBe("Email required");
    })

    it("Password field - empty", async () => {
        await SignInForm.setPassword("");
        await SignInForm.clickPasswordLabel();

        await expect(await SignInForm.getPasswordErrorMessageText()).toBe("Password required");
    })

    it("Email field - incorrect", async () => {
        await SignInForm.setEmail("test")
        await SignInForm.clickEmailLabel();

        await expect(await SignInForm.getEmailErrorMessageText()).toBe("Email is incorrect");
    })

    it("Non-existent user", async () => {
        await SignInForm.setEmail("test@test.com");
        await SignInForm.setPassword("123456");
        await SignInForm.clickSubmitButton();

        await expect(await SignInForm.getWrongDataErrorMessageText()).toBe("Wrong email or password");
    })

    it("Existing user", async () => {
        await SignInForm.setEmail("aleksey.litvinov+user3@testqa.com");
        await SignInForm.setPassword("Password123");
        await SignInForm.clickSubmitButton();

        await $('.panel-page').waitForDisplayed();

        await expect(await browser.getUrl()).toEqual("https://guest:welcome2qauto@qauto.forstudy.space/panel/garage");
    })
    
})