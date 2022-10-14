import { Button } from "../components";
import { deleteUser } from "../services/API";
import { FiTrash2, FiEdit } from "react-icons/fi";

const RowActions = (props) => {
  const handleEdit = (user) => {
    const formattedDate = user.data_nascimento.split("/").reverse().join("-");
    props.addUserToEdit({ ...user, data_nascimento: formattedDate });
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    props.setUsers((users) => users.filter((user) => user.id !== id));
  };

  return (
    <td>
      <Button>
        <FiEdit
          className="button-icon"
          onClick={() => handleEdit(props.user)}
        />
      </Button>
      <Button>
        <FiTrash2
          className="button-icon"
          onClick={() => handleDelete(props.user.id)}
        />
      </Button>
    </td>
  );
};

export default RowActions;
