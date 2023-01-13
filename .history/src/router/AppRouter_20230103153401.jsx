import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Testing } from '../Testing'

export const AppRouter = () => {
  return (
    <Routes>
    <Route path='/testing' element={<Testing></Testing>}></Route>
    </Routes>
  )
}
