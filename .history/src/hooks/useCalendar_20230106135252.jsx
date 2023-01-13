import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvent } from "../store/calendar/CalendarSlice";


export const useCalendar = () => {
 const {events,activeEvent} = useSelector(state=>state.calendar);
 const dispatch=useDispatch();

 const setActiveEvent=(calendarEvent)=>{
dispatch(onSetActiveEvent(calendarEvent))
 }
    return {
        //propiedades
        events,
        //metodos
        setActiveEvent,
 }
}
