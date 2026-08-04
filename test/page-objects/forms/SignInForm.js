class SignInForm {

    get emailField() {
        return $("#signinEmail");
    }

    get emailErrorMessage() {
        return $("form > div:nth-child(1) .invalid-feedback > p");
    }

    get emailLabel() {
        return $('label[for="signinEmail"]');
    }


    get passwordField() {
        return $("#signinPassword");
    }
    
    get passwordErrorMessage() {
        return $("form > div:nth-child(2) .invalid-feedback > p");
    }
    
    get passwordLabel() {
        return $('label[for="signinPassword"]');
    }    

    get loginButton() {
        return $("div.modal-footer button.btn-primary");
    }    

    get errorMessage() {
        return $("p.alert-danger");
    }        

    async setEmail(email){
        await this.emailField.setValue(email);
    }

    async clickEmailLabel(){
        await this.emailLabel.click();
    }

    async getEmailErrorMessageText(){
        return await this.emailErrorMessage.getText();
    }

    async setPassword(password){
        await this.passwordField.setValue(password);
    }

    async clickPasswordLabel(){
        await this.passwordLabel.click();
    }

    async getPasswordErrorMessageText(){
        return await this.passwordErrorMessage.getText();
    }    

    async clickSubmitButton(){
        this.loginButton.click();
    }

    async getWrongDataErrorMessageText(){
        return await this.errorMessage.getText();
    }    
}

export default new SignInForm();
