import { fetchUsers } from "./services/API";
import { useEffect, useState } from "react";

import Container from "./components/Container";
import Table from "./components/Table";
import Button from "./components/Button";
import PersonForm from "./components/PersonForm";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetchUsers();

      if (!response) return;

      const { data } = response;

      if (!data.length) return;

      setUsers(data);
    };

    getUsers();
  }, []);

  const handleUserToEdit = (userData) => {
    setUserToEdit(userData);
    setShowModal(true);
  };

  const handleModalVisibility = () => {
    setUserToEdit(null);
    setShowModal((prev) => !prev);
  };

  return (
    <div>
      <div className="space-between">
        <h1>Pessoas Cadastradas</h1>
        <Button
          className="insert-person-button"
          onClick={handleModalVisibility}
        >
          Cadastrar pessoa
        </Button>
        {showModal && (
          <PersonForm
            onClose={handleModalVisibility}
            setUsers={setUsers}
            userToEdit={userToEdit}
          />
        )}
      </div>
      <Container>
        <Table
          users={users}
          addUserToEdit={handleUserToEdit}
          setUsers={setUsers}
        />
      </Container>
    </div>
  );
}

export default App;
