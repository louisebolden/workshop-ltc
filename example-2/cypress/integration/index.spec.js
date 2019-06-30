context("This cool app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("sums the numbers entered into the input fields", () => {
    cy
      .get('.sum-form input[type="number"]').eq(0)
      .type("5").should("have.value", "5")

      .get('.sum-form input[type="number"]').eq(1)
      .type("2").should("have.value", "2")

      .get(".sum-form input[type='submit']")
      .click()

      .get(".answer")
      .should("have.text", "7");
  });
});
