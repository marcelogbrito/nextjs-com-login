import {v4 as uuid} from 'uuid'
type SignInRequestData = {
  email: string;
  password: string;
}

//isso é só pra simular um tempo de espera
const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SignInRequestData) {
  await(delay);

  return {
    token: uuid(),
    user: {
      name: 'José da Silva',
      email: 'jose@dasilva.com',
      avatar: 'https://github.com/marcelogbrito.png'
    }

  }
}

export async function recoverUserInformation() {
  delay()
  return {
    user: {
      name: 'José da Silva',
      email: 'jose@dasilva.com',
      avatar: 'https://github.com/marcelogbrito.png'
    }

  }
}
