
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import { NavBar } from '../components/NavBar'
import { localizer } from '../../helpers/'
import { getMessages } from '../../helpers/Messages'
import { CalendarEvent } from '../components/CalendarEvent'
import { addHours } from "date-fns";

export const Events = [{
  title: 'Cumple de dany',
  notes: 'Torta para Dany',
  start: new Date(),
  end: addHours(new Date(), 3),
  bgColor: '#fafafa',
  user: {
    id: '123',
    name: 'Dany Bechara'
  }
}]




export const CalendarPages = () => {
  
const [lastView, setlastView] = useState(localStorage.getItem('lastview')|| 'week')

const onDoubleClick = (evento) => {
  console.log({ doubleClick: evento })
}
const onClick = (evento) => {
  console.log({ Click: evento })
}
const onViewChange = (evento) => {
 
  localStorage.setItem('lastview',evento)
  setlastView(localStorage.getItem('lastview'));
}

const eventStyleGetter = (event, start, end, isSelected) => {
  const style = {
    backgroundColor: '#347CF7',
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white'
  }
  if (isSelected) {
    return { style }

  }
}
  return (
    <>
      <NavBar></NavBar>
      <Calendar
      view={lastView}
        localizer={localizer}
        events={Events}
        startAccessor="start"
        endAccessor="end"
        messages={getMessages()}
        style={{ height: 'calc( 100vh - 80px )' }}
        eventPropGetter={eventStyleGetter}
        components={{
        
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onClick}
        onView={onViewChange}
      />
      
    </>

  )
}
