import React from 'react'
import {MMcalendar} from "../components"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const CalendarPage = ({user}) => {

  return (
    <div><h1><CalendarMonthIcon/><br />Memento Mori Calendar</h1>
    <MMcalendar {...user}></MMcalendar>
    </div>
  )
}

export default CalendarPage