import React, {useRef, useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import {Paper, Grid, CircularProgress} from '@mui/material/';
import dayjs from 'dayjs';
import formatDate from '../../utils/format-date';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LifeCountdown = (user) => {
  const [timerYears, setTimerYears]=useState(0)
  const [timerMonths, setTimerMonths]=useState(0)
  const [timerDays, setTimerDays]=useState(0)
  const [timerHours, setTimerHours]=useState(0)
  const [timerMinutes, setTimerMinutes]=useState(0)
  const [timerSeconds, setTimerSeconds]=useState(0)
  const [isLoading, setIsLoading] = useState(true);
 

  let interval = useRef();

//date of birth
const dob = dayjs(user.dateOfBirth);

//date of death
const dod = dayjs(dob).add(80, 'year')

  const startTimer = () => {
    const countdownDate = dod
    interval = setInterval(()=>{
      const now = dayjs()
      const distance = countdownDate - now;
        let years = Math.floor((distance % (1000 * 60 * 60 * 24 * 30 * 12 * 356)) / (1000 * 60 * 60 * 24 * 30 * 12));
        let months = Math.floor((distance % (1000 * 60 * 60 * 24 * 30 * 12)) / (1000 * 60 * 60 * 24 * 30));
        let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0){
        //stop timer
        clearInterval(interval.current)
      } else {
        //update timer
        setIsLoading(false);
        setTimerYears(years)
        setTimerMonths(months)
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    },1000)
  }

  useEffect(()=>{
    const someref = interval.current
    startTimer();
    return()=>{
       clearInterval(someref)
    }
  },[])

  return (
    <div>
        <Paper sx={{p:"1px", mt:"5px"}}>
          <h2>Remember death...</h2>

                    </Paper>
   <Grid
  container
    fullWidth
  direction="row"
  alignItems="center"
  justifyContent="center"
>
      <Grid container spacing={2} columns={70} style={{ minHeight: '5vh', m:"5px", display:"flex",direction:"row",
      alignItems:"center",
      justifyContent:"center"}}>
        <Grid item xs={8}>
          <Item style={{fontSize:30, fontFamily:'warnock'}}>
          { !isLoading && timerYears.length > 0 ? (
            <><CircularProgress /> </>       
          ) : (
            <>{timerYears}</>
          )}
          <br />Years</Item> 
        </Grid>
        <Grid item xs={8}>
          <Item style={{fontSize:30}}>{timerMonths}<br />Months</Item> 
        </Grid>
        <Grid item xs={8}>
          <Item style={{fontSize:30}}>{timerDays}<br />Days</Item> 
        </Grid>
        <Grid item xs={8}>
          <Item style={{fontSize:30}}>{timerHours}<br />Hours</Item> 
        </Grid>
        <Grid item xs={8}>
          <Item style={{fontSize:30}}>{timerMinutes}<br />Minutes</Item>
        </Grid>
          <Grid item xs={8}>
          <Item style={{fontSize:30}}>{timerSeconds}<br />Seconds</Item>
        </Grid>
      </Grid>

    </Grid>
    </div>
  )
}

export default LifeCountdown