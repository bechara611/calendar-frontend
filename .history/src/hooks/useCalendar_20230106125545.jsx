import { useSelector } from "react-redux"


export const useCalendar = () => {
 const {events,activeEvent} = useSelector(state=>state.calendar);
    return {
        //propiedades
        events
        //metodos
 }
}
