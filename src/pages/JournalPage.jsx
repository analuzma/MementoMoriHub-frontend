import React from 'react'
import { JournalEntries } from '../components'

const JournalPage = ({user, sendMessage}) => {

  return (
    <div><h1>{user.firstName}'s Personal Journal</h1>
    <JournalEntries></JournalEntries>
    </div>
  )
}

export default JournalPage