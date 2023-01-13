import { useDispatch, useSelector } from "react-redux"


export const useCalendar = () => {
 const {events,activeEvent} = useSelector(state=>state.calendar);
 const dispatch=useDispatch();

 
    return {
        //propiedades
        events
        //metodos
 }
}
