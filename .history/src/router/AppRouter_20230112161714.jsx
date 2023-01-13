import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPages } from '../auth/'
import { CalendarPages } from '../calendar/'
import { useAuthStore } from '../hooks/useAuthStore'


export const AppRouter = () => {
 const {status} = useSelector((state)=>state.auth)
 const {oncheckAuth}= useAuthStore();


useEffect(() => {
  oncheckAuth();
}, [])

  
  return (
    <Routes>
      {
        (status === 'not-authenticated'
          ?(
          <>
          
          <Route path='/auth/*' element={<LoginPages></LoginPages>}></Route>
          <Route path='/*' element={<Navigate to={'/auth/login'}></Navigate>}></Route>
          </>)
          :(
          <>
          <Route path='/' element={<CalendarPages></CalendarPages>}></Route>
          <Route path='/*' element={<Navigate to={'/auth/login'}></Navigate>}></Route>
          </>)
        )
      }

    </Routes>
  )
}
