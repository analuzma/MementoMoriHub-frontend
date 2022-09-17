import React from 'react'
import { JournalEntry } from '../components'

const JournalDetailPage = ({user, sendMessage}) => {

  return (
    <div>
    <JournalEntry {...sendMessage}></JournalEntry>
    </div>
  )
}

export default JournalDetailPage