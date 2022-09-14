import { useState, useEffect } from "react";
import {getJournalEntriesByUserWs, deleteJournalEntryWs} from "../../services/journal-ws"
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";

const JournalEntry = () => {
  // const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(true);
//   const [userJournals, setUserJournals] = useState([]);
//   //get user's entries
//   const findUserEntries = async () => {
//     const  hasEntries= await getJournalEntriesByUserWs();
//     if (hasEntries) {
//       setUserJournals(hasEntries.data.journalEntry);
//       setIsLoading(false);
//       console.log("journal",hasEntries.data.journalEntry)
//     } else {
//       console.log("no entries found")
//     }
//   };

//   useEffect(() => {
//       findUserEntries()
//       .then(data=>{
//         console.log(data)
//       })
//   }, []);

  return (
    <div>Journal entry</div>
  )
}

export default JournalEntry