import API from "./services/API";
import { useEffect, useState } from "react";

import Container from "./components/Container";
import Table from "./components/Table";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await API.get("/pessoas");
      setUsers(response.data);
    };
    getUsers();
  }, []);

  return (
    <div>
      <div className="space-between">
        <h1>Pessoas Cadastradas</h1>
      </div>
      <Container>
        <Table users={users} />
      </Container>
    </div>
  );
}

export default App;
