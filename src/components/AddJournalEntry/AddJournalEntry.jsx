import React, {useState} from 'react'
import dayjs from 'dayjs'
import { styled } from "@mui/material/styles";
import {Typography, Checkbox, Box, IconButton, Paper, Button, TextField, Container, Grid, TextareaAutosize, FormControlLabel } from "@mui/material";
  import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {uploadImageWs} from "../../services/upload-ws"
import {newJournalEntryWs} from "../../services/journal-ws"
import {useNavigate} from 'react-router-dom'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const AddJournalEntry = (sendMessage) => {
    const navigate = useNavigate()
    const [values, setValues] = useState({
    title: "",
    description: "",
    date: (dayjs()),
    // isFeatured: false,
    // coverUrl: ""
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const Input = styled("input")({
    display: "none",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    setMessage(null);
    setError(null); 
  };

  const handleUpload = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    uploadImageWs(formData)
    .then((res) => {
        if (res.status){
                  setValues({
          ...values,
          imageUrl: res.data.url.uri,
        });
        setMessage(res.data.msg);
        } else {
        setMessage(res.data.errorMessage)
        }
      })
      .catch((err) => {
        sendMessage(err);
      });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    try {
      newJournalEntryWs(values).then((response) => {
        if (response.status) {
          // sendMessage("Journal entry created!", "success")
          navigate('/journal')
          setTimeout(() => {
          }, 3000);
        } else {
          //setError
          setMessage(response.errorMessage);
        }
      });
    } catch (error) {
      setMessage(error.errorMessage);
    }
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <>
<Grid
  item xs={12}
  container
  direction="column"
  justifyContent="center"
  alignItems="center"
>
<Paper elevation={6} item sx={{  display:"flex", 
alignItems:"center", justifyContent:"center", flexDirection:"column", p:"30px", width:"80%"}} > 
<Typography
  variant="h5"
  gutterBottom
  component="div"
  sx={{ mb: 3, fontFamily:"warnock" }}
>
  {/* QUOTE TO STYLE */}
  I will keep constant watch over myself and - most importantly - will put each day up for review. - Seneca The Younger
</Typography>
          <form onSubmit={handleFormSubmission} >
            {/* entry */}
            <TextField
              id="outlined-basic"
              label="Write your entry's title"
              name="title"
              variant="outlined"
              onChange={handleChange}
              sx={{ width: 400, mb: 2, backgroundColor:"black", color:"white" }}
            />
            {/* description */}
            <TextField
              minRows={30}
              multiline
              aria-label="maximum height"
              placeholder="Write your journal entry here..."
              label="Write your entry"
              name="description"
              variant="outlined"
              onChange={handleChange}
              style={{ width: 400, fontFamily:'warnock-pro', fontSize:20, color:"white", backgroundColor:"black", p:5 }}
            />
            {/*isFeatured*/}
                  <FormControlLabel
          value="isFeatured"
          control={<Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />}
          label="Featured?"
          labelPlacement="start"
        />
            <Grid container justifyContent="end" paddingTop={3} paddingRight={2}>
            <Button type="submit" variant="contained">
              SUBMIT JOURNAL ENTRY <HistoryEduIcon/>
            </Button>
            </Grid>
            {error ? (
              <Box sx={{ m: 2 }}>
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              </Box>
            ) : (
              <Box sx={{ m: 2 }}>
                <Typography variant="body2" color="primary">
                  {message}
                </Typography>
              </Box>
            )}
          </form>
        </Paper>
      </Grid>
    </>
  )
}

export default AddJournalEntry