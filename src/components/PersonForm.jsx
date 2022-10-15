import { useState } from "react";
import { Input, Modal, Button } from ".";
import { addUser, updateUser } from "../services/API";
import { BsPlusSquare } from "react-icons/bs";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";

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

    props.setUsers((prev) => [...prev, { ...pessoa, id: userId }]);
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

  const title = props.userToEdit ? "Atualizar" : "Cadastrar";

  const handleSubmitButton =
    title === "Atualizar" ? (
      <Button type="submit" className="new-person-form_button">
        <MdOutlineSystemUpdateAlt className="new-person_form_button-icon" />
        Atualizar
      </Button>
    ) : (
      <Button type="submit" className="new-person-form_button">
        <BsPlusSquare className="new-person_form_button-icon" />
        Cadastrar
      </Button>
    );

  return (
    <Modal onClose={props.onClose}>
      <form className="new-person_form" onSubmit={handleFormSubmit}>
        <h2 className="title">{title} pessoa</h2>
        <Input
          label="Nome"
          name="nome"
          type="text"
          id="nome"
          onChange={changeNomeHandler}
          value={pessoa.nome}
          placeholder="Exemplo"
        />
        <Input
          label="Email"
          name="email"
          type="email"
          id="email"
          onChange={changeEmailHandler}
          value={pessoa.email}
          placeholder="exemplo@exemplo.com"
        />
        <Input
          label="Data de nascimento"
          name="data_nascimento"
          type="date"
          id="data_nascimento"
          onChange={changeDataNascimentoHandler}
          value={pessoa.data_nascimento}
        />
        {handleSubmitButton}
      </form>
    </Modal>
  );
};

export default PersonForm;
