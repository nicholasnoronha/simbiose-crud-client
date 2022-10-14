import Button from "./Button";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { deleteUser } from "../services/API";
import "../styles/table.css";
import moment from "moment";

const Table = (props) => {
  const handleEdit = (user) => {
    const formattedDate = user.data_nascimento.split("/").reverse().join("-");
    props.addUserToEdit({ ...user, data_nascimento: formattedDate });
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    props.setUsers((users) => users.filter((user) => user.id !== id));
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
    const date = moment(user.data_nascimento).format("DD/MM/YYYY");
    return (
      <tr key={user.id}>
        <td>{user.nome}</td>
        <td>{user.email}</td>
        <td>{date}</td>
        <td>
          <Button>
            <FiEdit
              className="button-icon"
              onClick={() => handleEdit({ ...user, data_nascimento: date })}
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
