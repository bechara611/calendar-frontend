import { addHours} from 'date-fns'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import React from 'react'
import { Calendar } from 'react-big-calendar'
import { NavBar } from '../components/NavBar'
import { localizer } from '../../helpers/'




const events = [{
  title:'Cumple de dany',
  notes:'Torta para Dany',
  start: new Date(),
  end: addHours(new Date(),1),
  bgColor:'#fafafa',
  user:{}
}]

export const CalendarPages = () => {
  
  return (
    <>
    <NavBar></NavBar>
    <Calendar
    localizer={localizer}
    events={events}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 'calc( 100vh - 80px )' }}
  />
    </>
 
  )
}
