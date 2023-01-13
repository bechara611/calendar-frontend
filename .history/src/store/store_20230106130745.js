import { configureStore } from '@reduxjs/toolkit'
import { CalendarSlice } from './calendar/CalendarSlice'
import { uiSlice } from './ui/uiSlice'
	
export const store = configureStore({
  reducer: {
    ui:uiSlice.reducer,
    calendar:CalendarSlice.reducer
  },
  middleware:(getDefaultMiddleware)=>{return getDefaultMiddleware({
    serializableCheck:false
  })}
})