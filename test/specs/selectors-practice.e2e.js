describe("Selectors practice", () => {

    it("CSS - get by class", async () => {
        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await $('.header_signin').click();
        await browser.pause(5000);
    })

    it("XPath - get by class", async () => {
        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await $('//button[@class="hero-descriptor_btn btn btn-primary"]').click();
        await browser.pause(5000);
    })

    it("By full text", async () => {
        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await $('=Sign In').click();
        await browser.pause(5000);
    })

    it("By partial text", async () => {
        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        await $('*=Sign I').click();
        await browser.pause(5000);
    })    

    it.only("Group of elements", async () => {
        await browser.url(`https://guest:welcome2qauto@qauto.forstudy.space/`);
        const elements = await $$('nav > *');
        elements.forEach((element) => {
            console.log(element.getText());
        })
        await browser.pause(5000);
    })        
})