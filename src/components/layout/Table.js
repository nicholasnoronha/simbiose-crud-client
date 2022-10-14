import { RowActions } from "../../components";
import "../../styles/table.css";
import moment from "moment";

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
    const date = moment(user.data_nascimento).format("DD/MM/YYYY");
    return (
      <tr key={user.id}>
        <td>{user.nome}</td>
        <td>{user.email}</td>
        <td>{date}</td>
        <RowActions
          addUserToEdit={props.addUserToEdit}
          setUsers={props.setUsers}
          user={{ ...user, data_nascimento: date }}
        />
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
