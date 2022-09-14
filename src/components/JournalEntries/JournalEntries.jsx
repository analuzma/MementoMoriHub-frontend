import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { CircularProgress, TableCell, tableCellClasses, TableRow, TableContainer, Paper, Table, TableHead, Container, TableBody } from "@mui/material";
import { getJournalEntriesByUserWs } from "../../services/journal-ws"
import { useNavigate } from "react-router-dom";
import {} from "@mui/material/";
import JournalCard from "../JournalCard/JournalCard";

//table looks
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

//
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

//journal card map
  function userJournalsList() {
   return [...journalEntries].reverse().map((journal, i) => {
     return (
          <JournalCard key={i} title={journal.title} description={journal.description} coverUrl={journal.coverUrl} isFeatured={journal.isFeatured} date={journal.date}></JournalCard>
     );
   });
 }

  return (
    <>
<p>JournalEntries</p>
<Container maxWidth="fixed" >
<Paper elevation={6} sx={{  display:"flex", 
alignItems:"center", justifyContent:"center", flexDirection:"column", p:"30px", width:"80%"}} > 
        {!isLoading && journalEntries.length > 0 ? 
        (
          <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>DATE</StyledTableCell>
            <StyledTableCell align="left">TITLE</StyledTableCell>
            <StyledTableCell align="left"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
              {userJournalsList()}
            </TableBody>
          </Table>
        </TableContainer>
          </>
        ) : (
          
          <p><CircularProgress/></p>
        )}

        </Paper>
        </Container>
    </>
  )
}


export default JournalEntries