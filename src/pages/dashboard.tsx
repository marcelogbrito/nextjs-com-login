import React, {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Container } from '../styles/pages/Home';

const Dashboard: React.FC = () => {
  const {user} = useContext(AuthContext)
  return (
    <Container>
<h1>Pagina secreta</h1>
    </Container>
  );
  }
export default Dashboard
