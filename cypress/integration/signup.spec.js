import signup from '../pages/SignupPage'
import SignupFactory from '../fixtures/factories/SignupFactory'

describe('Signup', () => {
  it('success register to be a deliveryman',function (){
    const deliver = SignupFactory.deliver()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.modalContentShouldBe(expectedMessage)
  })

  it('invalid register due invalid cpf',function(){
    const deliver = SignupFactory.deliver()
    deliver.cpf = 'cpfinvalido'
    const expectedMessage = 'Oops! CPF inválido'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe(expectedMessage)
  })

  it('invalid register due invalid email',function(){
    const deliver = SignupFactory.deliver()
    deliver.email = 'email-invalido'
    const expectedMessage = 'Oops! Email com formato inválido.'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe(expectedMessage)
  })
})


// check-point technic
// after change to wanted page check if some element that is expected is in the page