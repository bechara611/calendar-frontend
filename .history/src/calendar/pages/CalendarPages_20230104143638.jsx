import React from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import { NavBar } from '../components/NavBar'

export const CalendarPages = () => {
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
  return (
    <>
    <NavBar></NavBar>
    <Calendar
    localizer={localizer}
    events={myEventsList}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500 }}
  />
    </>
 
  )
}
