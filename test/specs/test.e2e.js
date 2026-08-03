import { expect, browser, $ } from '@wdio/globals'

describe('My Login application', () => {

    before(() => {
        console.log("This is BEFORE hook");
    })

    beforeEach(() => {
        console.log("This is BEFOREEACH hook");
    })

    after(() => {
        console.log("This is AFTER hook");
    })

    afterEach(() => {
        console.log("This is AFTEREACH hook");
    })

    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
    })
})

