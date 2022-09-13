import React from 'react'
import {MMcalendar} from "../components"

const CalendarPage = ({user}) => {

  return (
    <div><h1>{user.firstName}'s calendar</h1>
    <MMcalendar {...user}></MMcalendar>
    </div>
  )
}

export default CalendarPage