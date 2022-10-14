import { useState } from "react";
import { Input, Modal, Button } from "../components";
import { addUser, updateUser } from "../services/API";

const PersonForm = (props) => {
  const [pessoa, setPessoa] = useState({
    id: props.userToEdit?.id || "",
    nome: props.userToEdit?.nome || "",
    email: props.userToEdit?.email || "",
    data_nascimento: props.userToEdit?.data_nascimento || "",
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!props.userToEdit) {
      return await addPersonHandler();
    }

    return await editPersonHandler();
  };

  const addPersonHandler = async () => {
    const response = await addUser(pessoa);

    if (!response) return;

    const { data } = response;

    const { insertId: userId } = data;

    props.setUsers((prev) => [...prev, pessoa]);
    props.onClose();
  };

  const editPersonHandler = async () => {
    const response = await updateUser(pessoa);
    if (!response) return;

    props.setUsers((users) => {
      const filteredUsers = users.filter((user) => user.id !== pessoa.id);
      return [...filteredUsers, pessoa];
    });
    props.onClose();
  };

  const changeNomeHandler = (event) => {
    const nome = event.target.value;
    setPessoa((prev) => {
      return { ...prev, nome };
    });
  };
  const changeEmailHandler = (event) => {
    const email = event.target.value;
    setPessoa((prev) => {
      return { ...prev, email };
    });
  };
  const changeDataNascimentoHandler = (event) => {
    const dataNascimento = event.target.value;
    setPessoa((prev) => {
      return { ...prev, data_nascimento: dataNascimento };
    });
  };

  return (
    <Modal onClose={props.onClose}>
      <form className="new-person-form" onSubmit={handleFormSubmit}>
        <Input
          label="Nome"
          name="nome"
          type="text"
          id="nome"
          onChange={changeNomeHandler}
          value={pessoa.nome}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          id="email"
          onChange={changeEmailHandler}
          value={pessoa.email}
        />
        <Input
          label="Data de nascimento"
          name="data_nascimento"
          type="date"
          id="data_nascimento"
          onChange={changeDataNascimentoHandler}
          value={pessoa.data_nascimento}
        />
        <Button type="submit">
          {props.userToEdit ? "Atualizar" : "Cadastrar"}
        </Button>
      </form>
    </Modal>
  );
};

export default PersonForm;
