import HomePage from "../../page-objects/pages/HomePage";
import SignInForm from "../../page-objects/forms/SignInForm";
import GaragePage from "../../page-objects/pages/GaragePage";

describe("Garage page", () => {

    beforeEach(async () => {
        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await HomePage.openSignInForm();
        await SignInForm.setEmail("aleksey.litvinov+user3@testqa.com");
        await SignInForm.setPassword("Password123");
        await SignInForm.clickSubmitButton();
        await GaragePage.verifyPageIsReady();

        await expect(await browser.getUrl()).toEqual("https://guest:welcome2qauto@qauto.forstudy.space/panel/garage");
    })

    it("Add car - BMW X5", async () => {
        await GaragePage.addCar('BMW', 'X5', 50);
        await GaragePage.verifyLastAddedCar('BMW X5');
    })

    // it("Add car - Ford Focus", async () => {
    //     await GaragePage.addCar('Ford', 'Focus', 199);
    //     await GaragePage.verifyLastAddedCar('Ford Focus');
    // })

})