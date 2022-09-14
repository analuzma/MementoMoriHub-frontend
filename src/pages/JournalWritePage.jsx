import React from 'react'
import { AddJournalEntry } from '../components'
const JournalWritePage = ({user, sendMessage}) => {

  return (
    <div><h1>writing journal</h1>
        <AddJournalEntry></AddJournalEntry>
    </div>
  )
}

export default JournalWritePage