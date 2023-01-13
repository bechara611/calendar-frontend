import React, { useState } from 'react'
import ReactModal from 'react-modal'
import Modal from 'react-modal'
import './CalendarModal.css'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');
export const CalendarModal = () => {
    const [isOpen, setisOpen] = useState(true)

    const onCloseModal = () => {
        console.log('cerrando modal')
        setisOpen(false)
    }
    return (
        <>
            <Modal
                isOpen={isOpen}
                onRequestClose={onCloseModal}
                style={customStyles}
                className='modal'
                overlayClassName='modal-fondo'
                closeTimeoutMS={200}
            >
                <h1> Nuevo evento </h1>
                <hr />
                <form className="container">

                    <div className="form-group mb-2">
                        <label>Fecha y hora inicio</label>
                        <input className="form-control" placeholder="Fecha inicio" />
                    </div>

                    <div className="form-group mb-2">
                        <label>Fecha y hora fin</label>
                        <input className="form-control" placeholder="Fecha inicio" />
                    </div>

                    <hr />
                    <div className="form-group mb-2">
                        <label>Title and notes</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                        />
                        <small id="emailHelp" className="form-text text-muted">a short description</small>
                    </div>

                    <div className="form-group mb-2">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Information</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Save</span>
                    </button>

                </form>
            </Modal>
        </>
    )
}
