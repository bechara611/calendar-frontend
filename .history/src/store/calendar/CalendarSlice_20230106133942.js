import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns';

const tempEvents={
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
    onNewEvent:(state,action)=>{
    state.events=action.payload
    }
  }
});

export const {} = CalendarSlice.actions

