import { useState } from "react"
import { Button, DeleteModal } from "../components";
import { deleteUser } from "../services/API";
import { FiTrash2, FiEdit } from "react-icons/fi";

const RowActions = (props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const handleEdit = (user) => {
    const formattedDate = user.data_nascimento.split("/").reverse().join("-");
    props.addUserToEdit({ ...user, data_nascimento: formattedDate });
  };
  
  const handleDelete = async (id) => {
    await deleteUser(id);
    props.setUsers((users) => users.filter((user) => user.id !== id));
  };

  const openDeleteModal = () => setShowDeleteModal(true)
  const hideDeleteModal = () => setShowDeleteModal(false)
  // 
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
          onClick={openDeleteModal}
        />
      </Button>
      {showDeleteModal && 
      <DeleteModal 
        user={props.user} 
        onClose={hideDeleteModal} 
        onDelete={() => handleDelete(props.user.id)} />}
      
    </td>
  );
};

export default RowActions;
