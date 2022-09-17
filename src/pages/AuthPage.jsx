import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SignUpForm, SignInForm} from '../components'
import { useLocation} from "react-router-dom";
import darkWavesBg from "../img/gradientBg.jpg"


const AuthPage = (props) => {

  const location = useLocation()


  return (

      <Grid container component="main" sx={{ height: '96vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${darkWavesBg})`,
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
          {location.pathname === "/signup" ?
          <SignUpForm {...props}/>:<SignInForm {...props}/>}

          </Box>
        </Grid>
      </Grid>
  );
}

export default AuthPage;
