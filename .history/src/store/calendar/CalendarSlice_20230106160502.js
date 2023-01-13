import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';

const tempEvents={
        _id: new Date().getTime(),
        title: 'Cumple de dany',
        notes: 'Torta para Dany',
        start: new Date(),
        end: addHours(new Date(), 3),
        bgColor: '#fafafa',
        user: {
          id: '123',
          name: 'Dany Bechara'
        }
    }


const initialState = {
events:[tempEvents],
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
            if(evento._id===payload._id){
               
                return payload
            }
            return evento
        })
    },
    onDeleteEvent:(state)=>{
        if(state.activeEvent){
        state.events=state.events.filter(evento=>evento._id!==state.activeEvent._id)
    }
    }
  }
});

export const {onSetActiveEvent,onNewEvent,onUpdateEvent,onDeleteEvent} = CalendarSlice.actions

