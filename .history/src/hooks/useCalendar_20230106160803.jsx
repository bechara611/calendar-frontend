import { useDispatch, useSelector } from "react-redux"
import { onDeleteEvent, onNewEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/CalendarSlice";


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
        dispatch(onUpdateEvent(calendarEvent))
    }else{
        //creando
        dispatch(onNewEvent({...calendarEvent,_id:new Date().getTime()}))
    }
 }

 const startDeletingEvent=()=>{
    //TODOO llegar al back
    dispatch(onDeleteEvent());
 }

    return {
        //propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        //metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent
 }
}
