describe("Login Test", () => {
  it("Should create course in successfully", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('input[name="user"]').type("teste_coordenador");
    cy.get('input[name="pass"]').type("Teste123senha");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/home");
    cy.contains("Disciplinas");

    cy.contains("Cursos").click();
    cy.get('.add-course-buttton').click();

    cy.get('input[name="nome"]').type("Teste Cypress");
    cy.get('input[name="descricao"]').type(
      "Teste com Cypres com pelo menos 20 caractreres"
    );
    cy.get('input[name="periodos"]').type("1");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/cursos");
  });
});
