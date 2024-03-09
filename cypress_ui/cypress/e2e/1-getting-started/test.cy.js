describe('Functional Login Test', () => {
    it('Verify Failed Login with invalid credentials (email & password)', () => {
      cy.visit('https://barru.pythonanywhere.com/daftar')
      cy.get('#email').type('incorrectemail@example.com')
      cy.get('#password').type('incorrectpassword')
      cy.get('#signin_login').click()
      // assertion
      cy.get('.swal2-popup').should('be.visible')
      cy.contains("User's not found").should('be.visible')
      cy.contains('Email atau Password Anda Salah').should('be.visible')
    })
  })

// cy.request("GET", "https://api.coinbase.com/v2/currencies").
// (response) => {
// console.log(response.status)})

describe("Login API", () => {
  it("should return a successful response", () => {
    // Make the API request
    cy.request({
      method: "POST",
      url: "http://barru.pythonanywhere.com/login",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": "jokotampan900@gmail.com",
        "password": "jokotampan900"
      })
    });

    // Assert the response
    cy.expect(response.status).to.eq(200);
    cy.expect(response.body).to.have.property("success");
    cy.expect(response.body.success).to.be.true;
  });
});

describe('UI Login Page Test', () => {
    it('should have correct styles for the "SIGN IN" button', () => {
      cy.visit('https://barru.pythonanywhere.com/daftar')
      // assertion
      cy.get('#signin_login')
        .should('have.css', 'background-color', 'rgb(255, 0, 0)')
        .should('have.css', 'font-size', '13.3333px')
        .should('have.css', 'font-family', 'Times New Roman')
    })
  })

