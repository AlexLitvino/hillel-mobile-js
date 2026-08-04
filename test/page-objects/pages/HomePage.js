class HomePage{

    get signInButton(){
        return $('.header_signin');
    }

    async openSignInForm(){
        await this.signInButton.click();
    }
}

export default new HomePage();
