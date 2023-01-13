import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { LoginPages } from '../auth/pages/LoginPages'
import { CalendarPages } from '../calendar/pages/CalendarPages'


export const AppRouter = () => {
  const authStatus='not-authenticated'
  return (
    <Routes>
   
    <Route path='/auth/*' element={<LoginPages></LoginPages>}></Route>
    <Route path='/*' element={<CalendarPages></CalendarPages>}></Route>
    </Routes>
  )
}
