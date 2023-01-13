
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import { NavBar } from '../components/NavBar'
import { localizer } from '../../helpers/'
import { getMessages } from '../../helpers/Messages'
import { CalendarEvent } from '../components/CalendarEvent'
import { addHours } from "date-fns";
import { CalendarModal } from '../components/CalendarModal'
import { useUiStore } from '../../hooks'
import { useCalendar } from '../../hooks/useCalendar'


export const CalendarPages = () => {
  const {openDateModal}= useUiStore()
  const {events,setActiveEvent}= useCalendar();
const [lastView, setlastView] = useState(localStorage.getItem('lastview')|| 'week')

const onDoubleClick = (evento) => {
  console.log({ doubleClick: evento })
  openDateModal();
}
const onClick = (evento) => {
  // console.log({ Click: evento })
  setActiveEvent(evento)
}
const onViewChange = (evento) => {
 
  localStorage.setItem('lastview',evento)
  setlastView(localStorage.getItem('lastview'));
}

const eventStyleGetter = (event, start, end, isSelected) => {
  const style = {
    backgroundColor: isSelected ?  '#347CF7' : '',
    borderRadius: '0px',
    fontSize:'12px',
    opacity: 0.8,
    color: 'white'
  }
    return { style }
}
  return (
    <>
      <NavBar></NavBar>
      <Calendar
      view={lastView}
        localizer={localizer}
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
      <CalendarModal></CalendarModal>
    </>

  )
}
