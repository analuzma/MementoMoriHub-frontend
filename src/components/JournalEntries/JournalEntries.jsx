import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';
import { Grid, Box,  CircularProgress, TableCell, tableCellClasses, TableRow, TableContainer, Paper, Table, TableHead,Button, TableBody } from "@mui/material";
import { getJournalEntriesByUserWs } from "../../services/journal-ws"
import { useNavigate } from "react-router-dom";
import {JournalCard} from "../JournalCard";
import {FloatingAdd} from "../FloatingAdd";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

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
      setJournalEntries(hasEntries.data.journalEntries);
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
      <Box
        sx={{
          display: "flex",
          alignItems:"center",
          justifyContent:"center", 
          flexDirection: "column",
          mt: 5,
        }}
      >
        <Paper sx={{ maxWidth: 1000, p:"20px" }}>
        <div onClick={handleCreateJournalEntry}>
          <FloatingAdd mini = {true}  />
        </div>
        {!isLoading && journalEntries.length > 0 ? 
        (
          <>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 800, maxWidth:1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{fontFamily:"warlock", fontSize:20}}>DATE</StyledTableCell>
            <StyledTableCell align="left"  sx={{fontFamily:"warlock",fontSize:20}}>TITLE</StyledTableCell>
            <StyledTableCell align="left"><BookmarksIcon/></StyledTableCell>
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
              Write new entry <HistoryEduIcon/>
            </Button>
          </Grid>
    
          </>
        ) : (
          
          <>
          { journalEntries ==0 ?(
            <>
                {/* QUOTE TO STYLE */}
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
        </Box>
    </>
  )
}


export default JournalEntries