class productStore{
    navigateToProductStore(){
        cy.visit("https://demoblaze.com/")
    }

    //Locators
    btnHome(){
        return cy.get('.active > .nav-link')
    }

    clickBtnHome(){
        this.btnHome().click()
    }

    btnCart(){
        return cy.get('#cartur')
    }

    clickBtnCart(){
        this.btnCart().click()
    }

    btnAddCart(){
        return cy.get('.col-sm-12 > .btn')
    }

    clickBtnAddCart(){
        this.btnAddCart().click()
    }

    titleCart(){
        cy.get('.col-lg-8 > h2').contains('Products')
    }

    btnPlaceOrder(){
        return cy.get('.col-lg-1 > .btn')
    }

    clickBtnPlaceOrder(){
        this.btnPlaceOrder().click()
    }

    setTxtName($nombre){
        return cy.get('#name').type($nombre)
    }

    setTxtCountry($country){
        return cy.get('#country').type($country)
    }

    setTxtCity($city){
        return cy.get('#city').type($city)
    }

    setTxtCard($card){
        return cy.get('#card').type($card)
    }

    setTxtMonth($month){
        return cy.get('#month').type($month)
    }

    setTxtYear($year){
        return cy.get('#year').type($year)
    }

    btnPurchaseForm(){
        return cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
    }

    clickBtnPurchase(){
        this.btnPurchaseForm().click()
    }
}

export default productStore