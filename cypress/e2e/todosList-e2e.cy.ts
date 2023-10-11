describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should add a task", () => {
    cy.getDataTest("test-add-task-link").click();
    cy.getDataTest("test-form").find("input").type("test task");
    cy.getDataTest("test-add-button").click();
    cy.getDataTest("test-tasks-list").find("li").should("have.length", 5);
    cy.getDataTest("test-tasks-list")
      .find("li")
      .last()
      .find("form")
      .find("input")
      .should("have.value", "test task");
  });

  it("Should delete a task", () => {
    cy.getDataTest("test-tasks-list")
      .find("li")
      .last()
      .find("svg")
      .last()
      .click();
    cy.getDataTest("test-tasks-list").find("li").should("have.length", 3);
  });

  it("Should mark a task as completed", () => {
    cy.getDataTest("test-add-task-link").click();
    cy.getDataTest("test-form").find("input").type("test task");
    cy.getDataTest("test-add-button").click();

    cy.getDataTest("test-tasks-list")
      .find("li")
      .last()
      .find("svg")
      .first()
      .should('have.class', 'text-gray-500')

    cy.getDataTest("test-tasks-list")
      .find("li")
      .last()
      .find("svg")
      .first()
      .click();

    cy.getDataTest("test-tasks-list")
      .find("li")
      .last()
      .find("svg")
      .first()
      .should('have.class', 'text-green-500')
  })
});
