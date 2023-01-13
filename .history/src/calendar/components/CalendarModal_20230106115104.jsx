import { addHours, differenceInSeconds } from 'date-fns';
import React, { useMemo, useState } from 'react'
import DatePicker from "react-datepicker";
import Modal from 'react-modal'
import "react-datepicker/dist/react-datepicker.css";
import './CalendarModal.css'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css'
import { useUiStore } from '../../hooks';
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
    const {isDateModalOpen,  closeDateModal}= useUiStore()
    const [submited, setsubmited] = useState(false)
    const [formValues, setformValues] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours(new Date(), 2)
    })
const isValidOrNot = useMemo(() => {
    if(submited===false){return ''}
    if(formValues.title.length>0){
        return ''
    }else{
        return 'is-invalid'
    }
}, [formValues.title,submited])

    const onChangeInput = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }
    const onDateChange = (event, tipoFecha = 'start') => {
        setformValues({
            ...formValues,
            [tipoFecha]: event
        })
    }
    const onCloseModal = () => {
        console.log('cerrando modal')

        console.log(formValues)();
        closeDateModal();
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        setsubmited(true)
        //comparamos dos fechas
        const diferencia = differenceInSeconds(formValues.end,formValues.start);
if(isNaN(diferencia) || diferencia<=0){
    Swal.fire('Incorrect Dates','Please insert a valid a date','error')
    return;
}
if(formValues.title.length<=0){
    console.log('Please, insert a title')
    return
}
console.log(formValues)

//TODO REMOVER ERRORES EN PANTALLA, CERRAR MODAL


    }
    return (
        <>
            <Modal
                isOpen={isDateModalOpen}
                onRequestClose={onCloseModal}
                style={customStyles}
                className='modal'
                overlayClassName='modal-fondo'
                closeTimeoutMS={200}
            >
                <h3> New event</h3>
                <hr />
                <form className="container" onSubmit={onSubmit}>

                    <div className="form-group mb-2">
                        <label>Date and Time (Start)</label>
                        <DatePicker
                            dateFormat='Pp'
                            showTimeSelect
                            selected={formValues.start}
                            onChange={(evento) => onDateChange(evento, 'start')}
                            className='form-control'></DatePicker>
                    </div>

                    <div className="form-group mb-2">
                        <label>Date and Time (End) </label>
                        <DatePicker
                            minDate={formValues.start}
                            selected={formValues.end}
                            onChange={(evento) => onDateChange(evento, 'end')}
                            dateFormat='Pp'
                            showTimeSelect
                            className='form-control'>
                        </DatePicker>
                    </div>

                    <hr />
                    <div className="form-group mb-2">
                        <label>Title and notes</label>
                        <input
                            type="text"
                            className={`form-control ${isValidOrNot}`}
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
