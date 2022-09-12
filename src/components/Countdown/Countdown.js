import React, {useRef, useEffect, useState} from 'react'
import { styled } from '@mui/material/styles';
import {Paper, Grid, Box} from '@mui/material/';
import dayjs from 'dayjs';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Countdown = (user) => {
  const [timerDays, setTimerDays]=useState('00')
  const [timerHours, setTimerHours]=useState('00')
  const [timerMinutes, setTimerMinutes]=useState('00')
  const [timerSeconds, setTimerSeconds]=useState('00')

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

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0){
        //stop timer
        clearInterval(interval.current)
      } else {
        //update timer
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

  direction="column"
  alignItems="center"
  justifyContent="center"

  style={{ minHeight: '5vh', p: 1 }}
>
      <Grid container spacing={3} columns={15}>
        <Grid item xs={5}>
          <Item>{timerHours}<br />Hours</Item>
        </Grid>
        <Grid item xs={5}>
          <Item>{timerMinutes}<br />Minutes</Item>
        </Grid>
              <Grid item xs={5}>
          <Item>{timerSeconds}<br />Seconds</Item>
        </Grid>
      </Grid>

    </Grid>
    </div>
  )
}

export default Countdown