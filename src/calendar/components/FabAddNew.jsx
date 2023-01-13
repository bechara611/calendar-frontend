import { addHours } from 'date-fns'
import React from 'react'
import { useUiStore } from '../../hooks'
import { useCalendar } from '../../hooks/useCalendar'

export const FabAddNew = () => {
    const {openDateModal}= useUiStore()
    const {setActiveEvent} = useCalendar()
  
    const handleclickNew =()=>{
        openDateModal();
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 3),
            bgColor: '#fafafa',
            user: {
              id: '123',
              name: 'Dany Bechara'
        }})
    }
  return (
    <>
    <button
    className='btn btn-primary fab'
    onClick={handleclickNew}
    >
    <i className='fa fa-plus'></i>
    </button>
    </>
  )
}
