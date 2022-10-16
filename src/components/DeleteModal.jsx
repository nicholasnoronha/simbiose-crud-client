import { Modal, Button } from "../components"

const DeleteModal = props => {
    const submitFormHandler = (event) => {
        event.preventDefault()
        props.onDelete()
    }

    return <Modal onClose={props.onClose}>
        <form onSubmit={submitFormHandler}>
            <h2 className="title">Deletar pessoa</h2>
            <p>Tem certeza que deseja deletar {props.user.nome}?</p>
            <div className="modal_actions-container">
                <Button className="cancel-button">Cancelar</Button>
                <Button type="submit">Deletar</Button>
            </div>
        </form>

    </Modal>
}

export default DeleteModal;