import {useState, useEffect} from 'react'
import { Button, Box, Paper, CircularProgress } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const RandomQuote =(props)=> {
  const [id,setId] = useState("");
  const [body,setBody]= useState("");
  const [author,setAuthor]= useState("");
 

    //get random quote from api
    function getRandomQuote() {
        fetch('https://stoicquotesapi.com/v1/api/quotes/random')
        .then(res=> res.json())
        .then(data=>{
            setId(data.id);
            setBody(data.body);
            setAuthor(data.author);
        })
        .catch((err) => {
          props.sendMessage("err.message", "warning")
        })
    }

    
    useEffect(()=>{
        getRandomQuote()
    },[])

      return(
    <>
        <Button onClick={getRandomQuote} color="success">Get another quote <FormatQuoteIcon/></Button>
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

            {body ? (
            <>
              <h2>{body}</h2>
            <p>- <b style={{color:"gold", fontSize:"20px"}}>{author}</b></p>
            </>
            ) : (
              <><CircularProgress/></>
            )}
            
        </Paper>
        </Box>
        
    </>
      )
    }
export default RandomQuote