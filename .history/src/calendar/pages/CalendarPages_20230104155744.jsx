import { addHours } from 'date-fns'

import 'react-big-calendar/lib/css/react-big-calendar.css'
import React from 'react'
import { Calendar } from 'react-big-calendar'
import { NavBar } from '../components/NavBar'
import { localizer } from '../../helpers/'
import { getMessages } from '../../helpers/Messages'




const events = [{
  title: 'Cumple de dany',
  notes: 'Torta para Dany',
  start: new Date(),
  end: addHours(new Date(), 1),
  bgColor: '#fafafa',
  user: {}
}, {
  title: 'Cumple de dany2',
  notes: 'Torta para Dany2',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {}
}]

const eventStyleGetter = (event, start, end, isSelected) => {
  console.log({ event, start, end, isSelected })
 
  const style = {
    backgroundColor: '347CF7',
    borderRadius: '0px',
    opacity: 0.8,
    color: 'white'
  }


  if(isSelected){
    return {  style }
    
  }
   
    
  

}

export const CalendarPages = () => {

  return (
    <>
      <NavBar></NavBar>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={getMessages()}
        style={{ height: 'calc( 100vh - 80px )' }}
        eventPropGetter={eventStyleGetter}
      />
    </>

  )
}
