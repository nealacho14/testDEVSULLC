import productStore from "../Pages/productStore"

const pS = new productStore

describe('Realizar una prueba funcional automatizada (Prueba E2E) de un flujo de compra en la página https://www.demoblaze.com/ que incluya:', () => {
  beforeEach(() => {
    pS.navigateToProductStore();
  })
  it('Agregar dos productos al carrito, Visualizar el carrito, completar el formulario de compra, Finalizar compra', () => {
   cy.readFile('data/objetosCompra.json').then((data) => {
    let base = Object.keys(data)
    pS.clickBtnHome();
    for(let i=0;i<2;i++){
      let key = base[i]
      let value = data[key]
      cy.contains(value).click();
      cy.get('.name').contains(value)
      pS.clickBtnAddCart()
      pS.clickBtnHome()
    }
    pS.clickBtnCart()
    pS.titleCart()
    cy.contains('Sony xperia z5')
    cy.contains('Samsung galaxy s6')
    diligenciarFormulario();
   
   })
   
   function diligenciarFormulario(){
    pS.clickBtnPlaceOrder()
    pS.setTxtName('Neal')
    pS.setTxtCountry('Colombia')
    pS.setTxtCity('Mampujan')
    pS.setTxtCard('123456789')
    pS.setTxtMonth('11')
    pS.setTxtYear('90')
    pS.clickBtnPurchase()

    cy.get('.sweet-alert > h2').contains('Thank you for your purchase!')
   }
    
  })
})