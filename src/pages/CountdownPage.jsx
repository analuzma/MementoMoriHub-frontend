import React from 'react'
import { LifeCountdown } from '../components';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import skull from "../img/skull.png"

const CountdownPage = ({user,sendMessage}) => {

  return (
    <div>
   
    <h1><HourglassTopIcon/><br />Life Countdown</h1>
    
   <img src={skull} style={{width:"60px", height:"60px", marginRight:"10px", marginTop:"3px"}}></img>
   <LifeCountdown {...user} style={{display:"flex", justifyContent:"center", alignContent:"center"}}/>
    </div>
  )
}

export default CountdownPage