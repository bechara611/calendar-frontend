import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';

// const tempEvents={
//         _id: new Date().getTime(),
//         title: 'Cumple de dany2',
//         notes: 'Torta para Dany',
//         start: new Date(),
//         end: addHours(new Date(), 3),
//         bgColor: '#fafafa',
//         user: {
//           id: '123',
//           name: 'Dany Bechara'
//         }
//     }


const initialState = {
isLoadingEvent:true,
events:[],
activeEvent:null,
}

export const CalendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    onNewEvent:(state,{payload})=>{
    state.events.push(payload)
    state.activeEvent=null;
    },
    onSetActiveEvent:(state,{payload})=>{
        state.activeEvent=payload;
    },
    onUpdateEvent:(state,{payload})=>{
        state.events=state.events.map(evento=>{
            if(evento.id===payload.id){
               
                return payload
            }
            return evento
        })
    },
    onLoadEvents:(state,{payload=[]})=>{
      state.isLoadingEvent=false
      //state.events=payload
      payload.forEach(event=>{
        const existe= state.events.some(dbEvent=>dbEvent.id===event.id)
        if(!existe){
          state.events.push(event)
        }
      })
    },
    onDeleteEvent:(state)=>{
        if(state.activeEvent){
        state.events=state.events.filter(evento=>evento.id!==state.activeEvent.id)
    }
    }
  }
});

export const {onLoadEvents,onSetActiveEvent,onNewEvent,onUpdateEvent,onDeleteEvent} = CalendarSlice.actions

