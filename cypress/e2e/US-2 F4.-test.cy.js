describe('Registro', () => {
  it('Mensaje de error por campo obligatorio', () => {
   
    cy.visit('https://talentolab-test.netlify.app/')
    // 1. INICIO DEL FLUJO: Navegación y Click en 'Registrate'
    
    cy.get('.buttons-container > .btn-secondary').click()
    // 2. INGRESO DE DATOS 
    cy.get('[name="nombre"]').should('be.visible') .type ('María Molinari')
    
    cy.get('[name="email"]').should('be.visible') .type ('pruebacorreo@gmail.com')
    
    cy.get('[name="contrasena"]').click().type ('pruebacontraseña12!')
    // 3. ACCIÓN DE ENVÍO
    
    cy.get('form > .btn-primary').click()
    // 4. VALIDACIÓN DE ERROR 
   // Se verifica que la alerta de campo requerido aparezca en el campo omitido.
    cy.contains('Este campo es obligatorio').should('be.visible')
   
  })
})