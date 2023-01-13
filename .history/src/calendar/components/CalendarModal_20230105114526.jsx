import { addHours } from 'date-fns';
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import Modal from 'react-modal'
import "react-datepicker/dist/react-datepicker.css";
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

    const [formValues, setformValues] = useState({
        title:'Bechara',
        notes:'Dany',
        start: new Date(),
        end: addHours(new Date(),2)
    })

    const onChangeInput=({target})=>{
        setformValues({
            ...formValues,
            [target.name]:target.value
        })
    }
const onDateChange =(event,tipoFecha='start')=>{
    setformValues({
        ...formValues,
        [tipoFecha]:event
    })
}
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
                <h3> New event</h3>
                <hr />
                <form className="container">

                    <div className="form-group mb-2">
                        <label>Date and Time (Start)</label>
                       <DatePicker
                       selected={formValues.start}
                       onChange={onDateChange}
                       className='form-control'></DatePicker>
                    </div>

                    <div className="form-group mb-2">
                        <label>Date and Time (End) </label>
                        <input className="form-control" placeholder="End" />
                    </div>

                    <hr />
                    <div className="form-group mb-2">
                        <label>Title and notes</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            autoComplete="off"
                            value={formValues.title}
                            onChange={onChangeInput}
                        />
                        <small id="emailHelp" className="form-text text-muted">a short description</small>
                    </div>

                    <div className="form-group mb-2">
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Notes"
                            rows="5"
                            name="notes"
                            value={formValues.notes}
                            onChange={onChangeInput}
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
