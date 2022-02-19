import SignupPage from '../pages/SignupPage'

describe('Cadastro', () => {
  it('register to be a deliveryman', () => {
      const deliver = {
      name: 'Thiago Leite',
      email: 'thiagoleite@email.com',
      cpf: '11122233300',
      whatsapp: '11999999999',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '1000',
        details: 'Ap 142',
        district: 'Itaim Bibi',
        city_state: 'São Paulo/SP'
      },
      delivery_method: 'Moto',
      cnh: 'images/cnh-digital.jpg'
    }

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    const signup = new SignupPage()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.modalContentShouldBe(expectedMessage)
  })

  it('invalid cpf', () => {
    const deliver = {
      name: 'Thiago Leite',
      email: 'thiagoleite@email.com',
      cpf: '111222333AA',
      whatsapp: '11999999999',
      address: {
        postalcode: '04534011',
        street: 'Rua Joaquim Floriano',
        number: '1000',
        details: 'Ap 142',
        district: 'Itaim Bibi',
        city_state: 'São Paulo/SP'
      },
      delivery_method: 'Moto',
      cnh: 'images/cnh-digital.jpg'
    }

    const expectedMessage = 'Oops! CPF inválido'

    const signup = new SignupPage()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe(expectedMessage)
  })
})


// check-point technic
// after change to wanted page check if some element that is expected is in the page