import signup from '../pages/SignupPage'
import SignupFactory from '../fixtures/factories/SignupFactory'

describe('Signup', () => {
  it('success register to be a deliveryman', () => {
    const deliver = SignupFactory.deliver()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.modalContentShouldBe(expectedMessage)
  })

  it('invalid register due invalid cpf', () => {
    const deliver = SignupFactory.deliver()
    deliver.cpf = 'cpfinvalido'
    const expectedMessage = 'Oops! CPF inválido'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe(expectedMessage)
  })

  it('invalid register due invalid email', () => {
    const deliver = SignupFactory.deliver()
    deliver.email = 'email-invalido'
    const expectedMessage = 'Oops! Email com formato inválido.'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe(expectedMessage)
  })

  context('Required fields', () => {
    const messages = [
      {field: 'name', output: 'É necessário informar o nome'},
      {field: 'email', output: 'É necessário informar o email'},
      {field: 'cpf', output: 'É necessário informar o CPF'},
      {field: 'postalcode', output: 'É necessário informar o CEP'},
      {field: 'address_number', output: 'É necessário informar o número do endereço'},
      {field: 'delivery_method', output: 'Selecione o método de entrega'},
      {field: 'cnh', output: 'Adicione uma foto da sua CNH'},
    ]

    before(() => {
      signup.go()
      signup.submit()
    })

    messages.forEach(({field, output}) => {
      it(`${field} is required`, () => {
        signup.alertMessageShouldBe(output)
      })
    })

  })
})


// check-point technic
// after change to wanted page check if some element that is expected is in the page