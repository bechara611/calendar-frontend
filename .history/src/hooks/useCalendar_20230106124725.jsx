import { useSelector } from "react-redux"


export const useCalendar = () => {
 const {Events} = useSelector(state=>state.calendar);
    return {
        //propiedades
        Events
        //metodos
 }
}
