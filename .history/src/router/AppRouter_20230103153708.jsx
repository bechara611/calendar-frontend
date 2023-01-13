import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Testing } from '../Testing'

export const AppRouter = () => {
  const authStatus='not-authenticated'
  return (
    <Routes>
   
    <Route path='/auth/*' element={<LoginPage></LoginPage>}></Route>
    </Routes>
  )
}
