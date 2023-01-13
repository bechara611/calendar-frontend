
import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { useEffect, useState } from 'react'
import { Calendar } from 'react-big-calendar'
import { NavBar } from '../components/NavBar'
import { localizer } from '../../helpers/'
import { getMessages } from '../../helpers/Messages'
import { CalendarEvent } from '../components/CalendarEvent'
import { addHours } from "date-fns";
import { CalendarModal } from '../components/CalendarModal'
import { useUiStore } from '../../hooks'
import { useCalendar } from '../../hooks/useCalendar'
import { FabAddNew } from '../components/FabAddNew'
import { FabDelete } from '../components/FabDelete'
import { useAuthStore } from '../../hooks/useAuthStore'
import { useDispatch, useSelector } from 'react-redux'


export const CalendarPages = () => {
  const {openDateModal}= useUiStore()
  const {user}= useSelector(state=>state.auth)
  const {events,setActiveEvent,hasEventSelected,startLoadingEvents}= useCalendar();
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
  const isMyEvent=(user.uid===event.user._id)||  (user.uid===event.user.uid) 
  const style = {
    backgroundColor: isMyEvent ?  '#347CF7' : '#465660',
    borderRadius: '0px',
    fontSize:'12px',
    opacity: 0.8,
    color: 'white'
  }
    return { style }
}

useEffect(() => {
  startLoadingEvents()

}, [])

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
        style={{ height: 'calc( 100vh - 80px )',marginRight:'8px', marginLeft:'8px' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onClick}
        onView={onViewChange}
      />
      <CalendarModal></CalendarModal>
      <FabAddNew></FabAddNew>
      {
        
      }
      <FabDelete></FabDelete>
    
    </>

  )
}
