import React from 'react'
import { AddJournalEntry } from '../components'


const JournalWritePage = ({user, sendMessage}) => {

  return (
    <div>
    <h1>Write new journal entry</h1>
        <AddJournalEntry {...sendMessage}></AddJournalEntry>
    </div>
  )
}

export default JournalWritePage