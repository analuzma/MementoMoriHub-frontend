import {Paper, Box, Grid, Container, Stack} from '@mui/material/';
import { useLocation} from "react-router-dom";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import skullBg from '../img/skullbg.jpg'

const HomePage = () => {
  return (
    <div>
      <Grid container component="main" sx={{ height: '96vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${skullBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
          
          <h1 style={{color:"gold"}}>Remember You Must Die</h1>
          <h2 style={{fontFamily:"warnick",color:"#DDD6F3"}}><b>Stoic Philosophy Toolkit: </b></h2>
    <Container maxWidth="sm" >
        <Paper elevation={1} sx={{ height: '100 vh' ,  display:"flex", 
        alignItems:"center", justifyContent:"center", flexDirection:"column", p:"30px"}} > 

  <Stack direction="column" alignItems="center" spacing={4}>
    <HistoryEduIcon fontSize="large"/>Private Journal
    <CalendarMonthIcon  fontSize="large"/>Memento Mori Calendar
    <HourglassTopIcon  fontSize="large"/>Life Countdown
    <FormatQuoteIcon  fontSize="large"/>Stoic Quotes
    </Stack>


          </Paper>
            

        </Container>
        </Box>
      </Grid>
      </Grid>
    </div>
  )
}

export default HomePage