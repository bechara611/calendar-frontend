import React from 'react'
import { useUiStore } from '../../hooks'

export const FabAddNew = () => {
    const {openDateModal}= useUiStore()

    const handleclickNew =()=>{
        openDateModal();
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
