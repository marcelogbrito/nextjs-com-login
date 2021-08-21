import React, {useContext} from 'react'
import Head from 'next/head'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../contexts/AuthContext'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  const { register, handleSubmit } = useForm()
  const {signIn} = useContext(AuthContext)

  async function handleSignIn (data)  {
    await signIn(data)
  }
  return (
    <Container>
      <Head>
        <title>Página Inicial</title>
        <meta name="description" content="Pagina inicial da aplicação" />
      </Head>

      <Container>
        <form onSubmit={handleSubmit(handleSignIn)}>
        <label>Usuario</label>
        <input type="text" {...register('email')} name="email" />
        <label>Senha</label>
        <input type="password" {...register('password')} name="password" />
        <button type="submit">Enviar</button>
        </form>
      </Container>
    </Container>
  )
}

export default Home
