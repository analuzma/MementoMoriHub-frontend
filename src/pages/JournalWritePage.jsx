import React from 'react'
import { AddJournalEntry } from '../components'
import noiceBg from "../img/noicebg.png"

const JournalWritePage = ({user, sendMessage}) => {
  const myStyle={
    backgroundImage: `url(${noiceBg})`,
    height:'90vh',
    marginTop:"-70px",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div style={myStyle}><h1>Write new journal entry</h1>
        <AddJournalEntry {...sendMessage}></AddJournalEntry>
    </div>
  )
}

export default JournalWritePage