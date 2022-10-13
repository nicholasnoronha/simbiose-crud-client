import Button from "./Button";
import { FiTrash2, FiEdit } from "react-icons/fi";
import "../styles/table.css";

const Table = (props) => {
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

    return (
      <tr key={user.id}>
        <td>{user.nome}</td>
        <td>{user.email}</td>
        <td>{`${date.getDate()}/${formattedMonth}/${date.getFullYear()}`}</td>
        <td>
          <Button>
            <FiEdit className="button-icon" />
          </Button>
          <Button>
            <FiTrash2 className="button-icon" />
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
