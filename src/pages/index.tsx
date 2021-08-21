import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Página Inicial</title>
        <meta name="description" content="Pagina inicial da aplicação" />
      </Head>


        <Container>
          <label>Usuario</label>
          <input type="text" />
          <label>Senha</label>
          <input type="password" />
          <button>Enviar</button>
          </Container>

    </Container>
  )


}

export default Home
