// import React, {useState} from 'react'
// import {Paper, Grid} from "@mui/material";
// import {useNavigate} from 'react-router-dom'
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';
// import {FloatingEdit} from "../../components"
// import {getJournalEntryWs} from "../../services/journal-ws"

//   const JournalEntry = (props) => {

//     const navigate = useNavigate();
//     const [isLoading, setIsLoading] = useState(true);

//       //get user specific journal entry
//   const findJournalEntry= async () => {
//     const hasEntries = await getJournalEntryWs(journalEntry);
//     if (hasEntries) {
//       setJournalEntries(hasEntries.data.journalEntries);
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     findJournalEntry();
//   }, []);

//   return (

//     <>
//     <FloatingEdit/>
//     <div>Journal entry</div>
//     <Grid
//       item xs={12}
//       container
//       direction="column"
//       justifyContent="center"
//       alignItems="center"
//     >
//     <Paper elevation={6} item sx={{  display:"flex", 
//     alignItems:"center", justifyContent:"center", flexDirection:"column", p:"30px", width:"80%"}} > 

//             </Paper>
//       </Grid>
//     </>
//   )
// }

// export default JournalEntry