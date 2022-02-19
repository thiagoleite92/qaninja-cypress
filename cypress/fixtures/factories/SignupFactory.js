const faker = require('faker');
const cpf = require('gerador-validador-cpf')

export default {
  deliver: function() {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    
    const data = {
    name: `${firstName} ${lastName}`,
    email: `${faker.internet.email(firstName)}`,
    cpf: cpf.generate(),
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
    cnh: 'images.jpeg'
  }

  return data
  }
}
