import API from './services/API'
import { useEffect, useState } from 'react';
import Container from './components/Container';

function App() {
  const [ users, setUsers ] = useState([])
  useEffect(() => {
    const getUsers = async () => {
      const response = await API.get('/pessoas')
      setUsers(response)
    }
    getUsers()
  }, [])
  return (
    <div>
      <h1>Pessoas Cadastradas</h1>
      <Container>
        <span>Oi</span>
      </Container>
    </div>
  );
}

export default App;
