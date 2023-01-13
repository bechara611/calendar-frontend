import React from 'react'
import { useUiStore } from '../../hooks'
import { useCalendar } from '../../hooks/useCalendar'

export const FabAddNew = () => {
    const {openDateModal}= useUiStore()
    const {setActiveEvent} = useCalendar()
    const handleclickNew =()=>{
        openDateModal();
        setActiveEvent({
            
        })
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
