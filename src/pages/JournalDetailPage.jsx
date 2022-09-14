import React from 'react'
import { JournalEntry } from '../components'

const JournalDetailPage = ({user, sendMessage}) => {

  return (
    <div><h1>specific journal</h1>
    <JournalEntry></JournalEntry>
    </div>
  )
}

export default JournalDetailPage