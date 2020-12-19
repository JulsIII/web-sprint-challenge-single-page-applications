
describe("Pizza Ordering App", () => {
   
    beforeEach(() => {
      cy.visit("http://localhost:3000");
});
 
   const textInput = () => cy.get('input[name="name"]');
   const pizzaSizeInput = () => cy.get('#pizza-size');
   const termsCheckbox = () => cy.get('input[name="terms"]');
   const topPepperoniCB = () => cy.get('input[name="topPepperoni"]');
   const topMushroomsCB = () => cy.get('input[name="topMushrooms"]');
   const submitButton = () => cy.get("#submitBtn");
   const specialInput = () => cy.get('input[name="special"]');
  
   it("Test Text Boxes - OPEN FORM B4 TEST ENDS TO PASS TEST!", () => {

       textInput()
       .should("have.value", "")
       .type("Namey McNameface")
       .should("have.value", "Namey McNameface");

       specialInput()
       .should("have.value", "")
       .type("Special Special Special Special")
       .should("have.value", "Special Special Special Special");

   });
 
   it("Select Multiple Toppings - OPEN FORM B4 TEST ENDS TO PASS TEST!", () => {

     topPepperoniCB().uncheck({ force: true})
     topPepperoniCB().check({ force: true})
     topPepperoniCB()
       .should('be.visible')
       .should('be.checked')

     topMushroomsCB().uncheck({ force: true})
     topMushroomsCB().check({ force: true})
     topMushroomsCB()
       .should('be.visible')
       .should('be.checked')
       
   });
 
  
  it("Check to see if a user can submit the form - OPEN FORM B4 TEST ENDS TO PASS TEST!", () => {

  submitButton().should("be.disabled");
 
  textInput().clear();
  textInput().type("Namey McNameface");

  pizzaSizeInput().select('Large');

  topPepperoniCB().uncheck({ force: true});
  topPepperoniCB().check({ force: true});

  termsCheckbox().uncheck({ force: true});
  termsCheckbox().check({ force: true});

  specialInput()
  .clear()
  .type("Special Special Special Special");
  
  submitButton().should("not.be.disabled");
  submitButton().click();

});

});


 