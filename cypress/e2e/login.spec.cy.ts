describe("Login Test", () => {
  it("Should log in successfully", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('input[name="user"]').type("teste_coordenador");
    cy.get('input[name="pass"]').type("Teste123senha");
    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/home");
    cy.contains("Disciplinas");
  });
});
