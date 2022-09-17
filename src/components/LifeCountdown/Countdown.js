import React, {useRef, useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import {Paper, Grid, CircularProgress} from '@mui/material/';
import dayjs from 'dayjs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#463681",
  ...theme.typography.body2,
  padding: theme.spacing(2),
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
 
      <Grid container columns={{ xs: 4, md: 80 }} style={{ minHeight: '5vh', display:"flex",direction:"row",
      alignItems:"center",
      justifyContent:"center"}}>
        <Grid item xs={10}>
          <Item style={{fontSize:30, fontFamily:'warnock', margin:"3px"}}>
          { timerYears ? (
            <>{timerYears}</>
          ) : (
            <><CircularProgress /> </>       
          )}
          <br />Years</Item> 
        </Grid>
        <Grid item xs={8}>
          <Item  style={{fontSize:30, fontFamily:'warnock', margin:"3px"}}>
          { timerMonths ? (
            <>{timerMonths}</>
          ) : (
            <><CircularProgress /> </>       
          )}
          <br />Months</Item> 
        </Grid>
        <Grid item xs={10}>
          <Item  style={{fontSize:30, fontFamily:'warnock', margin:"3px"}}>
          { timerDays ? (
            <>{timerDays}</>
          ) : (
            <><CircularProgress /> </>       
          )}
          <br />Days</Item> 
        </Grid>
        <Grid item xs={10}>
          <Item  style={{fontSize:30, fontFamily:'warnock', margin:"3px"}}>
          { timerHours ? (
            <>{timerHours}</>
          ) : (
            <><CircularProgress /> </>       
          )}
          <br />Hours</Item> 
        </Grid>
        <Grid item xs={10}>
          <Item  style={{fontSize:30, fontFamily:'warnock', margin:"3px"}}>
          { timerMinutes ? (
            <>{timerMinutes}</>
          ) : (
            <><CircularProgress /> </>       
          )}
          <br />Minutes</Item>
        </Grid>
          <Grid item xs={10}>
          <Item style={{fontSize:30, fontFamily:'warnock', margin:"3px"}}>
          { timerSeconds ? (
            <>{timerSeconds}</>
          ) : (
            <><CircularProgress /> </>       
          )}
          <br />Seconds</Item>
        </Grid>
      </Grid>
    </div>
  )
}

export default LifeCountdown