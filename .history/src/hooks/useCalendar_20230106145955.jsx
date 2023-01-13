import { useDispatch, useSelector } from "react-redux"
import { onSetActiveEvent } from "../store/calendar/CalendarSlice";


export const useCalendar = () => {
 const {events,activeEvent,onNewEvent} = useSelector(state=>state.calendar);
 const dispatch=useDispatch();

 const setActiveEvent=(calendarEvent)=>{
dispatch(onSetActiveEvent(calendarEvent))
 }
 const startSavingEvent=async(calendarEvent)=>{

    //TODO llegar al backend

    //TODO bien
    if(calendarEvent._id){
        //actualizando
    }else{
        //creando
    }
 }
    return {
        //propiedades
        events,
        activeEvent,
        //metodos
        setActiveEvent,
 }
}
