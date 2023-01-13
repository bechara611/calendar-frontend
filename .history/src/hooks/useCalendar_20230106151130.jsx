import { useDispatch, useSelector } from "react-redux"
import { onNewEvent, onSetActiveEvent } from "../store/calendar/CalendarSlice";


export const useCalendar = () => {
 const {events,activeEvent} = useSelector(state=>state.calendar);
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
        dispatch(onNewEvent({...calendarEvent,_id:new Date().getTime()}))
    }
 }
    return {
        //propiedades
        events,
        activeEvent,
        //metodos
        setActiveEvent,
        startSavingEvent
 }
}
