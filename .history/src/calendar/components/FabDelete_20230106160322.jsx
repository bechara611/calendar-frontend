import { addHours } from 'date-fns'
import React from 'react'
import { useUiStore } from '../../hooks'
import { useCalendar } from '../../hooks/useCalendar'

export const FabDelete = () => {
    const {DeleteEvent} = useCalendar()
  
    const handleDelete =()=>{
      DeleteEvent()
    }
  return (
    <>
    <button
    className='btn btn-danger fabDelete'
    onClick={handleclickNew}
    >
    <i className='fa fa-trash'></i>
    </button>
    </>
  )
}
