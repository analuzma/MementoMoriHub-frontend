import React from 'react'
import { JournalEntries } from '../components'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
const JournalPage = ({user, sendMessage}) => {

  return (
    <div>
  
      <h1>    <HistoryEduIcon fontSize="large"/>Personal Journal</h1>
      <JournalEntries></JournalEntries>
    </div>
  )
}

export default JournalPage