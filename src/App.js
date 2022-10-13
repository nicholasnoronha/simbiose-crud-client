import API from "./services/API";
import { useEffect, useState } from "react";

import Container from "./components/Container";
import Table from "./components/Table";
import Button from "./components/Button";
import PersonForm from "./components/PersonForm";

function App() {
  const [users, setUsers] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const response = await API.get("/pessoas");
      setUsers(response.data);
    };
    getUsers();
  }, []);

  function openModalHandler() {
    setOpenModal(true);
  }

  function closeModalHandler() {
    setOpenModal(false);
  }

  return (
    <div>
      <div className="space-between">
        <h1>Pessoas Cadastradas</h1>
        <Button className="insert-person-button" onClick={openModalHandler}>
          Cadastrar pessoa
        </Button>
        {openModal && (
          <PersonForm onClose={closeModalHandler} formAction="Cadastrar" />
        )}
      </div>
      <Container>
        <Table users={users} />
      </Container>
    </div>
  );
}

export default App;
