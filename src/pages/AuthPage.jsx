import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SignUpForm, SignInForm} from '../components/'
import { useLocation} from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

const AuthPage = (props) => {

    const location = useLocation()

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
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
    </ThemeProvider>
  );
}

export default AuthPage;
