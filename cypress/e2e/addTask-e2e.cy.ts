describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/add");
  });
  it("Tests the add task form", () => {
    cy.getDataTest("test-add-button").should("be.disabled");
    cy.getDataTest("test-form").find("input").type("test");
    cy.getDataTest("test-add-button").should("not.be.disabled");
    cy.getDataTest("test-add-button").click();
    cy.location("pathname").should("eq", "/");
  });
});
