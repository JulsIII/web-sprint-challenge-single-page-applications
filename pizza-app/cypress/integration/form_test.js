
describe("Pizza Ordering App", () => {
   
    beforeEach(() => {
      cy.visit("http://localhost:3000");
});
 
   const textInput = () => cy.get('input[name="name"]');
   const emailInput = () => cy.get('input[name="email"]');
   const passwordInput = () => cy.get('input[name="password"]');
   const pizzaSizeInput = () => cy.get('#pizza-size');
   const termsCheckbox = () => cy.get('input[name="terms"]');
   const topPepperoniCB = () => cy.get('input[name="topPepperoni"]');
   const submitButton = () => cy.get("#submitBtn");
   const specialInput = () => cy.get('input[name="special"]');
  
   it("Test Text Boxes - Open Pizza Form Before Test Ends! or Error", () => {

       textInput()
       .should("have.value", "")
       .type("Namey McNameface")
       .should("have.value", "Namey McNameface");

       specialInput()
       .should("have.value", "")
       .type("Special Special Special Special")
       .should("have.value", "Special Special Special Special");

   });
 
   it("Select Multiple Toppings - Open Pizza Form Before Test Ends or Error!", () => {

     topPepperoniCB().uncheck({ force: true})
     topPepperoniCB().check({ force: true})
     topPepperoniCB()
       .should('be.visible')
       .should('be.checked')
       
   });
 
  
    it("Check to see if a user can submit the form - Open Pizza Form Before Test Ends or Error!", () => {

  submitButton().should("be.disabled");
 
  textInput().clear();
  textInput().type("Namey McNameface");

  pizzaSizeInput().select('Large');

  termsCheckbox().uncheck({ force: true});
  termsCheckbox().check({ force: true});

  topPepperoniCB().uncheck({ force: true});
  topPepperoniCB().check({ force: true});

  specialInput()
  .clear()
  .type("Special Special Special Special");
  
  submitButton().should("not.be.disabled");
  submitButton().click();

});

});


 