describe('Contacto', () => {
  it('Aviso de "mensaje neviado con éxito"', () => {
  // 1. INICIO DEL FLUJO
    cy.visit('https://talentolab-test.netlify.app/')
    // 2. INGRESO DE DATOS
    cy.get('[type="text"]').type ('María Molinari')
    
    
    cy.get('[type="email"]').type ('correodeprueba@gmail.com')
    
    
    cy.get('textarea').type ('correo de prueba')

    // 3. ACCIÓN DE ENVÍO
    cy.get('form > .btn-primary').click()

    // 4. VALIDACIÓN DEL ERROR
    //Se valida el mensaje de **confirmación de envío**
    cy.contains('Su mensaje ha sido enviado con éxito').should('be.visible')
    })
})