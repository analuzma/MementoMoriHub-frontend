import React from 'react'
import {RandomQuote, FavoritedQuotes} from '../components/'
import FormatQuote from '@mui/icons-material/FormatQuote'

const QuotesPage = (props) => {

  return (
    <div>
      <h1><FormatQuote/>Stoic Quotes</h1>
      <RandomQuote/>
      <FavoritedQuotes/>
    </div>
  )
}

export default QuotesPage