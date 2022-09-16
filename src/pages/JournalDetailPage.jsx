import React from 'react'
import { JournalEntry } from '../components'
import noiceBg from "../img/noicebg.png"

const JournalDetailPage = ({user, sendMessage}) => {
  const myStyle={
    backgroundImage: `url(${noiceBg})`,
    height:'90vh',
    marginTop:"-70px",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div style={myStyle}>
    <JournalEntry {...sendMessage}></JournalEntry>
    </div>
  )
}

export default JournalDetailPage