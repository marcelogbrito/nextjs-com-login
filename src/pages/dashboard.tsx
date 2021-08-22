import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import React, {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Container } from '../styles/pages/Home';
import { getAPIClient } from '../services/axios';

const Dashboard: React.FC = () => {
  const {user} = useContext(AuthContext)
  return (
    <Container>
<h1>Pagina secreta</h1>
    </Container>
  );
  }
export default Dashboard

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx);
  const {['aplicacao.token']: token} = parseCookies(ctx)
  if(!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  await apiClient.get('/users')

  return {
    props: {

    }
  }
}
