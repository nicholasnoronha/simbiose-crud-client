import { fetchUsers } from "./services/API";
import { useEffect, useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { Button, Table, PersonForm, Container, Footer } from "./components";
import Loading from "./components/layout/Loading";

function App() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
  
        if (!response) return;
  
        const { data } = response;
  
        if (!data.length) return;
        setUsers(data);
      } finally {
        setLoading(false)
      }
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

  if (loading) return <Loading />

  return (
    <>
      <div className="body-container">
        <Container>
          <div className="space-between">
            <h1 className="title">Pessoas Cadastradas</h1>
            <Button
              className="new-person_button"
              onClick={handleModalVisibility}
            >
              <BsPlusSquare className="new-person_button-icon" />{" "}
              <span className="new-person_button-text">Cadastrar pessoa</span>
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
      </div>
      <Footer />
    </>
  );
}

export default App;
