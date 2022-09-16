import React from 'react'
import { JournalEntries } from '../components'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import noiceBg from "../img/noicebg.png"

const JournalPage = ({user, sendMessage}) => {
  const myStyle={
    backgroundImage: `url(${noiceBg})`,
    height:'90vh',
    marginTop:"-70px",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div style={myStyle}>
  
      <h1>    <HistoryEduIcon fontSize="large"/>Personal Journal</h1>
      <JournalEntries></JournalEntries>
    </div>
  )
}

export default JournalPage