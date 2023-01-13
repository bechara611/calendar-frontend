import { addHours } from 'date-fns'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import React from 'react'
import { Calendar } from 'react-big-calendar'
import { NavBar } from '../components/NavBar'
import { localizer } from '../../helpers/'
import { getMessages } from '../../helpers/Messages'
import { CalendarEvent } from '../components/CalendarEvent'




const events = [{
  title: 'Cumple de dany',
  notes: 'Torta para Dany',
  start: new Date(),
  end: addHours(new Date(), 1),
  bgColor: '#fafafa',
  user: {
    id: '123',
    name: 'Dany Bechara'
  }
}]

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

const onDoubleClick = (evento) => {
  console.log({ doubleClick: evento })
}
const onClick = (evento) => {
  console.log({ Click: evento })
}
const onViewChange = (evento) => {
  console.log({ View: evento })
}


export const CalendarPages = () => {

  return (
    <>
      <NavBar></NavBar>
      <Calendar
        localizer={localizer}
        view='semana'
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={getMessages()}
        style={{ height: 'calc( 100vh - 80px )' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onClick}
        onView={onViewChange}
      />
    </>

  )
}
