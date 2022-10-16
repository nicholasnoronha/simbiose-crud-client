import { Modal, Button } from "../components"
import { FiTrash2 } from "react-icons/fi";

const DeleteModal = props => {
    const submitFormHandler = (event) => {
        event.preventDefault()
        props.onDelete()
    }

    return <Modal onClose={props.onClose}>
        <form className="delete-person_form" onSubmit={submitFormHandler}>
            <h2 className="title">Deletar pessoa</h2>
            <p className="delete-person_subtitle">Tem certeza que deseja deletar {props.user.nome}?</p>
            <div className="modal_actions-container">
                <Button className="cancel-button" onClick={props.onClose}>Cancelar</Button>
                <Button className="delete-person-form_button" type="submit"> 
                    <FiTrash2 className="button-icon"/> 
                    Deletar
                </Button>
            </div>
        </form>

    </Modal>
}

export default DeleteModal;