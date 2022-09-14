import { useState, useEffect } from "react";
import { getJournalEntriesByUserWs } from "../../services/journal-ws"
import { useNavigate } from "react-router-dom";

const JournalEntries = (props) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [journalEntries, setJournalEntries] = useState([{}]);

  //get user's entries
  const findJournalEntry= async () => {
    const hasEntries = await getJournalEntriesByUserWs(journalEntries);
    if (hasEntries) {
      console.log("antes",journalEntries)
      setJournalEntries(hasEntries.data.journalEntries);
     console.log("dsps",journalEntries)
      setIsLoading(false);
    }
  };

  useEffect(() => {
    findJournalEntry();
  }, []);


  function userJournalsList() {
   return journalEntries.map((journal, i) => {
     return (
       <li key={i}>
         {journal.title} a
       </li>
     );
   });
 }

  return (
    <>
      <p>JournalEntries</p>
      <ul>      {userJournalsList()}</ul>
  
          </>
 
  )
}


export default JournalEntries