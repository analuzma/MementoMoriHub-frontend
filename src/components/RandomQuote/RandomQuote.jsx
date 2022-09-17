import {useState, useEffect} from 'react'
import { Button, Box, Paper, CircularProgress } from '@mui/material';
import {createFavQuoteWs} from "../../services/stoic-quotes-ws"
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { OnDeviceTraining } from '@mui/icons-material';

const RandomQuote =(props)=> {
    const [loading,setLoading] = useState(true);
    const [id,setId] = useState("");
    const [body,setBody]= useState("");
    const [author,setAuthor]= useState("");
    const [favorite, setFavorite]= useState({})

    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    function getRandomQuote() {
        fetch('https://stoicquotesapi.com/v1/api/quotes/random')
        .then(res=> res.json())
        .then(data=>{
            setId(data.id);
            setBody(data.body);
            setAuthor(data.author);
        })
        .catch((err) => {
          setMessage(err.message)
        })
    }


    const addToFavorites = (event) => {
        event.preventDefault();

        const randomQuote = {id, body, author}

        try {
            createFavQuoteWs(randomQuote).then((response) => {
            if (response.status) {
                setMessage("New favorite quote added")
              setTimeout(() => {
                // window.location.reload();
              }, 3000);
            } else {
              setError(response.errorMessage);
            }
          });
        } catch (error) {
          setError(error.errorMessage);
        }
    }
    
    useEffect(()=>{
        getRandomQuote()
    },[])

      return(
    <>
        <Button onClick={getRandomQuote} color="success">Get another quote <FormatQuoteIcon/></Button>
        <Button onClick={addToFavorites}color="secondary">Add to favorites <FavoriteBorderIcon/></Button>
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