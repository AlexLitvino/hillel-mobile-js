describe("Actions practice", () => {

    it("Click", async () => {
        await browser.url("https://www.rapidtables.com/tools/click-counter.html");
        await $("#addbtn").click();
        await browser.pause(3000);
        await $("#subbtn").click();
        await browser.pause(3000);
    })

    it("Double Click", async () => {
        await browser.url("https://www.rapidtables.com/tools/click-counter.html");
        await $("#addbtn").doubleClick();
        await browser.pause(3000);
        await $("#subbtn").doubleClick();
        await browser.pause(3000);
    })

    it("Right Click", async () => {
        await browser.url("https://www.rapidtables.com/tools/click-counter.html");
        // 0 - Left, 1 - Middle, 2 - Right
        await $("#addbtn").click({button: "right"});
        await browser.pause(3000);
    })

    it("Set, clear value - email field", async () => {
        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await $('.header_signin').click();
        const emailField = await $("#signinEmail");
        const testEmail = "testuser@gmail.com";
        emailField.setValue(testEmail);
        // await browser.pause(3000);
        // emailField.clearValue();
        // await browser.pause(3000);
        await expect(emailField).toHaveValue(testEmail);

        const observedEmail = await emailField.getValue();
        expect(observedEmail).toEqual(testEmail);
    })

     it.only("Checkboxes", async () => {
        await browser.url(`https://practice.expandtesting.com/checkboxes`);
        await $('#checkbox1').click();
        await expect($('#checkbox1')).toBeChecked();
        await $('#checkbox1').click();
        await expect($('#checkbox1')).not.toBeChecked();        
    })   

})

describe("Form validation", () => {

    it("Email field - empty", async () => {
        const emailField = await $("#signinEmail");
        const emailErrorMessage = await $("form > div:nth-child(1) .invalid-feedback > p");
        const emailLabel = await $('label[for="signinEmail"]');

        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await $('.header_signin').click();
        await emailField.setValue("");
        await emailLabel.click();

        await expect(emailErrorMessage).toBeDisplayed();
        await expect(emailErrorMessage).toHaveText("Email required");
    })

    it("Password field - empty", async () => {
        const passwordField = await $("#signinPassword");
        const passwordErrorMessage = await $("form > div:nth-child(2) .invalid-feedback > p");
        const passwordLabel = await $('label[for="signinPassword"]');

        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await $('.header_signin').click();
        await passwordField.setValue("");
        await passwordLabel.click();

        await expect(passwordErrorMessage).toBeDisplayed();
        await expect(passwordErrorMessage).toHaveText("Password required");
    })

    it("Email field - incorrect", async () => {
        const emailField = await $("#signinEmail");
        const emailErrorMessage = await $("form > div:nth-child(1) .invalid-feedback > p");
        const emailLabel = await $('label[for="signinEmail"]');

        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await $('.header_signin').click();
        await emailField.setValue("test");
        await emailLabel.click();

        await expect(emailErrorMessage).toBeDisplayed();
        await expect(emailErrorMessage).toHaveText("Email is incorrect");
    })

    it("Non-existent user", async () => {
        const emailField = await $("#signinEmail");
        const passwordField = await $("#signinPassword");
        const loginButton = await $("div.modal-footer button.btn-primary");
        const errorMessage = await $("p.alert-danger");

        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await $('.header_signin').click();
        await emailField.setValue("test@test.com");
        await passwordField.setValue("123456");
        await loginButton.click();

        await expect(errorMessage).toBeDisplayed();
        await expect(errorMessage).toHaveText("Wrong email or password");
    })

    it("Existing user", async () => {
        const emailField = await $("#signinEmail");
        const passwordField = await $("#signinPassword");
        const loginButton = await $("div.modal-footer button.btn-primary");

        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await $('.header_signin').click();
        await emailField.setValue("aleksey.litvinov+user3@testqa.com");
        await passwordField.setValue("Password123");
        await loginButton.click();
        await $('.panel-page').waitForDisplayed();

        await expect(await browser.getUrl()).toEqual("https://guest:welcome2qauto@qauto.forstudy.space/panel/garage");

    })
    
})


describe("Garage page", () => {
    it("Add car", async () => {
        const emailField = await $("#signinEmail");
        const passwordField = await $("#signinPassword");
        const loginButton = await $("div.modal-footer button.btn-primary");
        const addCarModelDropdown = await $("#addCarModel");

        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await $('.header_signin').click();
        await emailField.setValue("aleksey.litvinov+user3@testqa.com");
        await passwordField.setValue("Password123");
        await loginButton.click();
        await $('.panel-page').waitForDisplayed();

        await expect(await browser.getUrl()).toEqual("https://guest:welcome2qauto@qauto.forstudy.space/panel/garage");

        await $(".btn-primary").click();
        await $('#addCarBrand option[value="1: 2"]').waitForExist();
        await $("#addCarBrand").selectByVisibleText('BMW');

        //await $('#addCarModel option[value="7: 8"]').waitForExist();  // ID is dynamic
        await browser.pause(500);
        await addCarModelDropdown.selectByVisibleText("X5");

        const selectedText = await addCarModelDropdown.$('option:checked').getText();

        expect(selectedText).toBe('X5');

        await $('#addCarMileage').setValue(50);
        await $('.modal-footer .btn-primary').click();

        await expect(await $('.car_name')).toHaveText('BMW X5');

        // await browser.pause(30000);
        
    })

})
