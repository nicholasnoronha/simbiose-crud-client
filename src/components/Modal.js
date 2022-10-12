import ReactDOM from "react-dom"

const portalElement = document.getElementById('overlays')

const Backdrop = (props) => {
    return (
        <div onClick={props.onClose} className='backdrop'>
        </div>
    )
}

const Overlay = (props) => {
    return (
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClose={props.onClose} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <Overlay>{props.children}</Overlay>,
                portalElement
            )}
        </>
    )
}

export default Modal