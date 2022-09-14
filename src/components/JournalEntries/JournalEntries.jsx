import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { Grid, CircularProgress, TableCell, tableCellClasses, TableRow, TableContainer, Paper, Table, TableHead,Button, TableBody } from "@mui/material";

import { getJournalEntriesByUserWs } from "../../services/journal-ws"
import { useNavigate } from "react-router-dom";
import {JournalCard} from "../JournalCard";
import {FloatingAdd} from "../FloatingAdd";

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
          <JournalCard key={i} {...journal}></JournalCard>
     );
   });
 }

  const handleCreateJournalEntry = () => {
    navigate(`/journal/write`);
  };


  return (
    <>
<p>Journal entries from newest to oldest</p>
<Grid
  item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<Paper elevation={6} item sx={{  display:"flex", 
alignItems:"center", justifyContent:"center", flexDirection:"column", p:"30px", width:"80%"}} > 
        <div onClick={handleCreateJournalEntry}>
          <FloatingAdd mini = {true}  />
        </div>
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
        <TableBody component='div'>
              {userJournalsList()}
            </TableBody>
          </Table>
        </TableContainer>
          <br />
          <Grid container justifyContent="flex-end">
            <Button  onClick={handleCreateJournalEntry}>
              Write new entry
            </Button>
          </Grid>
    
          </>
        ) : (
          
          <>
          { journalEntries ==0 ?(
            <>
            <h2><b>Our life is what our toughts make it </b>- Marcus Aurelius</h2>
          <Grid container justifyContent="flex-end">
            <Button  onClick={handleCreateJournalEntry}>
              Write your first entry
            </Button>
          </Grid>
            </>
          ):(
            <><CircularProgress/></>
          )}
          </>
        )}

        </Paper>
        </Grid>
    </>
  )
}


export default JournalEntries