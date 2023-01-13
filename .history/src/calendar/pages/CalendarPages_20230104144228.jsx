import { addHours,format,parse,startOfWeek,getDay} from 'date-fns'
import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { NavBar } from '../components/NavBar'


const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

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
    style={{ height: 500 }}
  />
    </>
 
  )
}
