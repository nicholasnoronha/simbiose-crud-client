import Button from "./Button";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { deleteUser } from "../services/API";
import "../styles/table.css";

const Table = (props) => {
  const handleEdit = (user) => {
    const dateArray = user.data_nascimento.split("/");
    let month = dateArray[1];
    let day = dateArray[0];
    dateArray[1] = month.length < 2 ? `0${month}` : month;
    dateArray[0] = day.length < 2 ? `0${day}` : day;
    const formattedDate = dateArray.reverse().join("-");

    props.addUserToEdit({ ...user, data_nascimento: formattedDate });
  };

  const handleDelete = async (id) => {
    props.setUsers((users) => users.filter((user) => user.id !== id));
    await deleteUser(id);
  };

  const mappedThs = (
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Data Nascimento</th>
      <th>Ações</th>
    </tr>
  );

  const mappedTrs = props.users.map((user) => {
    const date = new Date(user.data_nascimento);
    const month = String(date.getMonth() + 1);
    const formattedMonth = month.length < 2 ? `0${month}` : month;
    const birthdayDate = `${date.getDate()}/${formattedMonth}/${date.getFullYear()}`;

    return (
      <tr key={user.id}>
        <td>{user.nome}</td>
        <td>{user.email}</td>
        <td>{birthdayDate}</td>
        <td>
          <Button>
            <FiEdit
              className="button-icon"
              onClick={() =>
                handleEdit({ ...user, data_nascimento: birthdayDate })
              }
            />
          </Button>
          <Button>
            <FiTrash2
              className="button-icon"
              onClick={() => handleDelete(user.id)}
            />
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <thead>{mappedThs}</thead>
      <tbody>{mappedTrs}</tbody>
    </table>
  );
};

export default Table;
