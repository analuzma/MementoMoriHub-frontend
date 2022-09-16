import React from 'react'
import {RandomQuote, FavoritedQuotes} from '../components/'

const QuotesPage = (props) => {

  return (
    <div>
      <h1>Stoic Quotes</h1>
      <RandomQuote/>
      <FavoritedQuotes/>
    </div>
  )
}

export default QuotesPage