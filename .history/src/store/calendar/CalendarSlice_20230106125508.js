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
Events:[tempEvents],
activeEvent:null,
}

export const CalendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    increment:(state,action)=>{

    }
  }
});

export const {} = CalendarSlice.actions

