import React from 'react'

export const CalendarEvent = ({event}) => {

    const {title,user} = event
   
<>
<strong>{title}</strong>
<span> - {user.name}</span>
</>  )
}
