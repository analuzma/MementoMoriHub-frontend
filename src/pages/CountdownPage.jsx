import React from 'react'
import { LifeCountdown } from '../components';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import darkWavesBg from "../img/skullbg.jpg"


const CountdownPage = ({user,sendMessage}) => {
  const myStyle={
    backgroundImage: `url(${darkWavesBg})`,
    height:'90vh',
    marginTop:"-70px",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div style={myStyle}>
   
    <h1 style={{marginTop:"70px", color:"white"}}><HourglassTopIcon/><br />Life Countdown</h1>
    
   <LifeCountdown {...user} style={{display:"flex", justifyContent:"center", alignContent:"center"}}/>

    </div>
  )
}

export default CountdownPage