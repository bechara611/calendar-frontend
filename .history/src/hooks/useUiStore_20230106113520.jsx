0import { useDispatch, useSelector } from 'react-redux'

export const useUiStore = () => {
 const dispatch = useDispatch();
    const {
    isDateModalOpen
 } = useSelector(state=>state.ui)

 const openDateModal=()=>{

 }
 return {
    //*propiedades
    isDateModalOpen,

    //*Metodos
 }


}
