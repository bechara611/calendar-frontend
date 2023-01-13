import { createSlice } from '@reduxjs/toolkit'

const initialState = {
events:[],
pushactiveEvent:null,
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

