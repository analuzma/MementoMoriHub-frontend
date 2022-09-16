import React from 'react'
import {LifeCountdown} from "../components"
import HourglassTopIcon from '@mui/icons-material/HourglassTop';


const CountdownPage = ({user,sendMessage}) => {

  return (
    <div><h1><HourglassTopIcon/>Life Countdown</h1>
   <LifeCountdown {...user}/>
    </div>
  )
}

export default CountdownPage