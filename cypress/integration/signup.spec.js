import signup from '../pages/SignupPage'

describe('Signup', () => {

  beforeEach(() => {
    cy.fixture('deliver').then(function(deliverInfo){
      this.deliver = deliverInfo
    })
  })

  it('success register to be a deliveryman',function (){
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    signup.go()
    signup.fillForm(this.deliver.signup)
    signup.submit()
    signup.modalContentShouldBe(expectedMessage)
  })

  it('invalid register due invalid cpf',function(){
    const expectedMessage = 'Oops! CPF inválido'

    signup.go()
    signup.fillForm(this.deliver.invalid_cpf)
    signup.submit()
    signup.alertMessageShouldBe(expectedMessage)
  })

  it('invalid register due invalid email',function(){
    const expectedMessage = 'Oops! Email com formato inválido.'

    signup.go()
    signup.fillForm(this.deliver.invalid_email)
    signup.submit()
    signup.alertMessageShouldBe(expectedMessage)
  })
})


// check-point technic
// after change to wanted page check if some element that is expected is in the page