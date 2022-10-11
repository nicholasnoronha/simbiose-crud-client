import API from './services/API'
import { useEffect, useState } from 'react';

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
    </div>
  );
}

export default App;
