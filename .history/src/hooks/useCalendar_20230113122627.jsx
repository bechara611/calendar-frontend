import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2";
import axiosInstance from "../api/CalendarAPI";
import { convertEventsToDateEvents } from "../helpers/convertEventsToDateEvents";
import { onDeleteEvent, onLoadEvents, onNewEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/CalendarSlice";


export const useCalendar = () => {
 const {events,activeEvent} = useSelector(state=>state.calendar);
 const {user} = useSelector(state=>state.auth)
 const dispatch=useDispatch();

 const setActiveEvent=(calendarEvent)=>{
dispatch(onSetActiveEvent(calendarEvent))
 }
 const startSavingEvent=async(calendarEvent)=>{
try {
      //TODO llegar al backend

    //TODO bien
    if(calendarEvent.id){
        //actualizando
        const {data} = await axiosInstance.put(`api/eventos/${calendarEvent.id}`,calendarEvent)
        dispatch(onUpdateEvent({...calendarEvent,user}))
        return
    }else{
        //creando
        const {data} = await axiosInstance.post('api/eventos',calendarEvent)
        dispatch(onNewEvent({...calendarEvent,id:data.evento.id,user}))
    }
} catch (error) {
    Swal.fire('Error',error.response.data.msg,'error')
}
  
 }

 const startDeletingEvent=async()=>{
    //TODOO llegar al back
try {
   await axiosInstance.delete(`api/eventos/${activeEvent.id}`)
    dispatch(onDeleteEvent());
} catch (error) {
    console.log(error)
    Swal.fire('Error',error.response.data.msg,'error')
}
   
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
