import { addHours } from 'date-fns'
import React from 'react'
import { useUiStore } from '../../hooks'
import { useCalendar } from '../../hooks/useCalendar'

export const FabDelete = () => {
    const {startDeletingEvent} = useCalendar()
  
    const handleDelete =()=>{
      startDeletingEvent()
    }
  return (
    <>
    <button
    className='btn btn-danger fabDelete'
    onClick={handleDelete}
    >
    <i className='fa fa-trash'></i>
    </button>
    </>
  )
}
