import React, {useState, useEffect} from 'react'
import dayjs from 'dayjs';
import {Box, Paper, Grid} from '@mui/material/';

const MMcalendar = (user) => {
//user dates
const dateOfBirth = dayjs(user.dateOfBirth);
const dateOfDeath = dayjs(dateOfBirth).add(80, 'year')
const now = dayjs()
//weeks
function getWeeksDiff(now, dateOfDeath) {
  const msInWeek = 1000 * 60 * 60 * 24 * 7;

  return Math.round(Math.abs(dateOfDeath - now) / msInWeek);
}
const remaining_weeks= Number(getWeeksDiff(now, dateOfDeath))
const lived_weeks = (4174 - remaining_weeks)
//months
const MONTHS=12
const YEARS=80


  return (
    <div>
i
    </div>
  )
}

export default MMcalendar