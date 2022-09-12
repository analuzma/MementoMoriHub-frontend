import React from 'react'
import { Container, Paper, Box, Stack, Grid} from '@mui/material/';
import dayjs from 'dayjs';
import { Countdown, FloatingEdit, BadgeAvatars } from '../components';
import {Link} from 'react-router-dom'

const ProfilePage = ({user}) => {
//users dates
const dateOfBirth = dayjs(user.dateOfBirth);
const dateOfDeath = dayjs(dateOfBirth).add(80, 'year')
const now = dayjs()
//years
function getYearsDiff(now, dateOfDeath) {
  const msInWeek = 1000 * 60 * 60 * 24 * 365;

  return Math.round(Math.abs(dateOfDeath - now) / msInWeek);
}
const yearsLeftToLive= getYearsDiff(now, dateOfDeath)
//weeks
function getWeeksDiff(now, dateOfDeath) {
  const msInWeek = 1000 * 60 * 60 * 24 * 7;

  return Math.round(Math.abs(dateOfDeath - now) / msInWeek);
}
const weeksLeftToLive= getWeeksDiff(now, dateOfDeath)
// month
function getMonthDiff(now, dateOfDeath) {
  const msInMonth = 1000*60*60*24*30.5;

  return Math.round(Math.abs(dateOfDeath - now) / msInMonth);
}
const monthLeftToLive= getMonthDiff(now, dateOfDeath)

// days
function getDaysDiff(now, dateOfDeath) {
  const msInDay = 1000 * 60 * 60 * 24;

  return Math.round(Math.abs(dateOfDeath - now) / msInDay);
}
const daysLeftToLive= getDaysDiff(now, dateOfDeath)

//percentage alive
const currentWeeks = weeksLeftToLive;
const totalWeeks = 4174;
function percentage(currentWeeks, totalWeeks) {
   return (100 * currentWeeks) / totalWeeks;
} 

const percentageDead = String(percentage(currentWeeks, totalWeeks)).slice(0, 2)
const percentageAlive = String(100-percentageDead).slice(0, 2)


  return (
    <div>
      <br />
              <Container maxWidth="sm" >
        <Paper elevation={6} sx={{ height: '100 vh' ,  display:"flex", 
        alignItems:"center", justifyContent:"center", flexDirection:"column", p:"30px"}} > 

  <Stack direction="row" spacing={2}>
    <BadgeAvatars {...user}/>
    <h1>{user.firstName}</h1>
    </Stack>
    <h2>You can expect to live approximately:</h2>
    <b style={{color:"#44B600", fontSize:"35px"}}>{yearsLeftToLive}</b><p>years</p> 
    <b style={{color:"#44B600", fontSize:"35px"}}>{monthLeftToLive} </b><p>months</p>
    <b style={{color:"#44B600", fontSize:"35px"}}>{weeksLeftToLive} </b><p>weeks</p>
    <b style={{color:"#44B600", fontSize:"35px"}}>{daysLeftToLive}</b><>days</> 
    <p>You have lived {percentageAlive}% of your life already and the other {percentageDead}% you might never have it</p>




        </Paper>
<Countdown {...user}/>
          <Box
      sx={{
             display: 'flex',
        flexWrap: 'wrap',
         width: "fit-content",
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
    </Box>
          <Grid container justifyContent="flex-end">
            <Grid item>
<br />
                *The average human lifespan nowadays is 80 years.
That means, your life is made up of (hopefully) 4,174 weeks.

            </Grid>
          </Grid>
   </Container>
<Link to="/calendar"><FloatingEdit></FloatingEdit></Link>
    </div>
  )
}

export default ProfilePage