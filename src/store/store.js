import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import { CalendarSlice } from './calendar/CalendarSlice'
import { uiSlice } from './ui/uiSlice'
	
export const store = configureStore({
  reducer: {
    ui:uiSlice.reducer,
    calendar:CalendarSlice.reducer,
    auth:authSlice.reducer
  },
  middleware:(getDefaultMiddleware)=>{return getDefaultMiddleware({
    serializableCheck:false
  })}
})