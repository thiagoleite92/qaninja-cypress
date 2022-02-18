describe('Cadastro', () => {
  it('Want to be a deliveryman', () => {
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app/')
    cy.get('a[href="/deliver"]').click()
    cy.url().should('eq', 'https://buger-eats.vercel.app/deliver') // check current url
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')

    const entregador = {
      name: 'Thiago Leite',
      email: 'thiagoleite@email.com',
      cpf: '11122233300',
      whatsapp: '11999999999',
      endereco: {
        cep: '04534011',
        rua: 'Rua Joaquim Floriano',
        numero: '1000',
        complemento: 'Ap 142',
        bairro: 'Itaim Bibi',
        cidade_uf: 'São Paulo/SP'
      }
    }

    cy.get('input[name="name"]').type(entregador.name)
    cy.get('input[name="email"]').type(entregador.email)
    cy.get('input[name="cpf"]').type(entregador.cpf)
    cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

    cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
    cy.get('input[type="button"][value="Buscar CEP"]').click()
    

    cy.get('input[name="address-number"]').type(entregador.endereco.numero)
    cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

    

    // cy.get('input[name="district"]').should('have.text', `${entregador.endereco.rua}`)
  })
})


// check-point technic
// after change to wanted page check if some element that is expected is in the page