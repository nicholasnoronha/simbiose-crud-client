import { fetchUsers } from "./services/API";
import { useEffect, useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import Container from "./components/UI/Container";
import Table from "./components/layout/Table";
import Button from "./components/UI/Button";
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
    <Container>
      <div className="space-between">
        <h1 className="title">Pessoas Cadastradas</h1>
        <Button className="new-person_button" onClick={handleModalVisibility}>
          <BsPlusSquare className="new-person_button-icon" /> Cadastrar pessoa
        </Button>
        {showModal && (
          <PersonForm
            onClose={handleModalVisibility}
            setUsers={setUsers}
            userToEdit={userToEdit}
          />
        )}
      </div>
      <Table
        users={users}
        addUserToEdit={handleUserToEdit}
        setUsers={setUsers}
      />
    </Container>
  );
}

export default App;
