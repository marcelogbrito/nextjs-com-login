import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Página Inicial</title>
        <meta name="description" content="Pagina inicial da aplicação" />
      </Head>


        <h1>Estrutura de aplicação Next.JS</h1>
        <p>Estrutura básica inicial de aplicação<optgroup></optgroup></p>

    </Container>
  )


}

export default Home
