import Modal from "./Modal";
import { useState } from "react";
import API from "../services/API";

const PersonForm = (props) => {
  const [pessoa, setPessoa] = useState({
    nome: "",
    email: "",
    dataNascimento: "",
  });

  const addPessoaHandler = async (event) => {
    event.preventDefault();
    const resp = await API.post("/pessoa", pessoa);
    console.log("resp", resp);
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
      <form className="new-person-form" onSubmit={addPessoaHandler}>
        <label htmlFor="nome">Nome: </label>
        <input
          name="nome"
          type="text"
          id="text"
          onChange={changeNomeHandler}
          value={pessoa.nome}
        ></input>
        <label htmlFor="email">Email: </label>
        <input
          name="email"
          type="email"
          id="email"
          onChange={changeEmailHandler}
          value={pessoa.email}
        ></input>
        <label htmlFor="data_nascimento">Data de nascimento: </label>
        <input
          name="data_nascimento"
          type="date"
          id="data_nascimento"
          onChange={changeDataNascimentoHandler}
          value={pessoa.data_nascimento}
        ></input>
        <button>{props.formAction}</button>
      </form>
    </Modal>
  );
};

export default PersonForm;
