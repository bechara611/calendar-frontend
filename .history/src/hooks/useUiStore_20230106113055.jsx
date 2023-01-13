import React from 'react'
import { useSelector } from 'react-redux'

export const useUiStore = () => {
 const {
    isDateModalOpen
 } = useSelector(state=>state.ui)

 return {
    //*propiedades
    isDateModalOpen,

    //*Metodos
 }


}
