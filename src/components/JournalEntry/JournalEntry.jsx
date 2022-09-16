import React, {useState, useEffect} from 'react'
import { useNavigate} from "react-router-dom";
import {Paper, Grid, Button, CircularProgress} from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {FloatingEdit} from "../../components"
import {getJournalEntryWs, deleteJournalEntryWs} from "../../services/journal-ws"
import { useParams } from "react-router-dom";
import formatDate from '../../utils/format-date';

const JournalEntry = ({sendMessage}) => {
        const navigate = useNavigate();
        const params = useParams();
        const [isLoading, setIsLoading] = useState(true);
        const [journalEntry, setJournalEntry] = useState(true);
          //   get user specific journal entry
    const findJournalEntry= async () => {
        const { data } = await getJournalEntryWs(params.id);
        setJournalEntry(data.journalEntry);
        setIsLoading(false);
    }
    
    
    //  delete journal
    const deleteJournalEntry = async () => {
        const { data } = await deleteJournalEntryWs(params.id);
        setJournalEntry(data.journalEntry);
        setIsLoading(false);
        navigate("/journal")
        sendMessage("Deleted journal entry", "success") //doesnt send
                        }
                    
        useEffect(() => {
        findJournalEntry();
        }, []);

          return (

    <>
    <FloatingEdit/>
    <div>
        <h1> {formatDate(journalEntry.date)}</h1>
       </div>
    <Grid
 
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
    <Paper elevation={6} item sx={{  display:"flex", 
    alignItems:"center", flexDirection:"column", p:"30px", width:"80%"}} > 
            {!isLoading && journalEntry ? 
        (<>
            <h1>{journalEntry.title}</h1>
            <p>{journalEntry.description}</p></>
        ) : ( <>
            <CircularProgress></CircularProgress></>
        )}
            </Paper>
                   <Grid  container maxWidth="80%" paddingTop="10px" justifyContent="flex-end" >
            <Button color="error" onClick={deleteJournalEntry}>
              DELETE JOURNAL ENTRY
            </Button>
             {/* <Button color="primary" onClick={editJournalEntry}>
             EDIT JOURNAL ENTRY
            </Button> */}
          </Grid>
      </Grid>
    </>
  )
}

export default JournalEntry