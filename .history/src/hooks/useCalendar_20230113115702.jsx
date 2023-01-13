import { useDispatch, useSelector } from "react-redux"
import axiosInstance from "../api/CalendarAPI";
import { convertEventsToDateEvents } from "../helpers/convertEventsToDateEvents";
import { onDeleteEvent, onNewEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/CalendarSlice";


export const useCalendar = () => {
 const {events,activeEvent} = useSelector(state=>state.calendar);
 const {user} = useSelector(state=>state.auth)
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
        const {data} = await axiosInstance.post('api/eventos',calendarEvent)
        dispatch(onNewEvent({...calendarEvent,id:data.evento.id,user}))
    }
 }

 const startDeletingEvent=()=>{
    //TODOO llegar al back
    dispatch(onDeleteEvent());
 }

 const startLoadingEvents =async()=>{
    try {
        const {data} = await axiosInstance.get('api/eventos/')
        const events= convertEventsToDateEvents(data.eventos)
        console.log(events)
        dispatch(onLoadEvents(events))
    } catch (error) {
        console.log(error)
    }
 }

    return {
        //propiedades
        events,
        activeEvent,
        hasEventSelected: !!activeEvent,
        //metodos
        setActiveEvent,
        startSavingEvent,
        startDeletingEvent,
        startLoadingEvents
 }
}
