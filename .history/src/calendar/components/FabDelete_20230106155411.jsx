import { addHours } from 'date-fns'
import React from 'react'
import { useUiStore } from '../../hooks'
import { useCalendar } from '../../hooks/useCalendar'

export const FabDelete = () => {
    const {setActiveEvent} = useCalendar()
  
    const handleclickNew =()=>{
      
    }
  return (
    <>
    <button
    className='btn btn-danger fabDelete'
    onClick={handleclickNew}
    >
    <i className='fa fa-plus'></i>
    </button>
    </>
  )
}
