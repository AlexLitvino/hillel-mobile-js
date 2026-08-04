class GaragePage {

    get carsPanel(){
        return $('.panel-page');
    }

    get addNewCarButton(){
        return $(".btn-primary");
    }

    get brandDropdown(){
        return $("#addCarBrand");
    }

    get modelDropdown(){
        return $("#addCarModel");
    }

    get mileageField(){
        return $('#addCarMileage');
    }

    get addCarButton(){
        return $('.modal-footer .btn-primary');
    }

    get lastAddedCarName(){
        return $('.car-item:first-child .car_name');
    }

    async verifyPageIsReady(){
        await this.carsPanel.waitForDisplayed();
    }

    async addCar(brand, model, mileage){
        await this.addNewCarButton.click();
        await this.brandDropdown.$('option[value="1: 2"]').waitForExist();
        await this.brandDropdown.selectByVisibleText(brand);
        await browser.pause(500);
        await this.modelDropdown.selectByVisibleText(model);
        const selectedText = await this.modelDropdown.$('option:checked').getText();
        expect(selectedText).toBe(model);
        await this.mileageField.setValue(mileage);
        await this.addCarButton.click();
    }

    async verifyLastAddedCar(text){
        await browser.pause(500); // to wait for added car really added to page
        expect(await this.lastAddedCarName.getText()).toBe(text);
    }

}

export default new GaragePage();
