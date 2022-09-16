import { useState, React } from "react";
import {Link, useNavigate} from 'react-router-dom'
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material/";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers/';
import { signupWs } from "../../services/auth-ws";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link style={{ textDecoration: 'none', color: 'inherit',}} to="/">
        Memento Mori Hub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function SignUpForm(props) {
  const navigate = useNavigate()

   const [response, setResponse] = useState({
    firstName: "",
    dateOfBirth: (dayjs()),
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, dateOfBirth, email, password, confirmPassword } = response
  // const [error, setError] = useState(null);

    const handleChange = (e) => {
    setResponse({
      ...response,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      firstName,
      dateOfBirth,
      email,
      password,
      confirmPassword,
    };

    signupWs(data)
    .then(res=>{
      const{ data,status,errorMessage} = res
      if (status){
        props.authentication(data.user)
        props.sendMessage("You have signed up!", "success")
        navigate('/profile')
      }else{
        //pueden guardar el errorMessage en un state para mostrrlo en el html
        props.sendMessage(errorMessage, "warning")
      }
    }
    )
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            {/* Date Of Birth (dob) input */}
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                disableFuture
                id="dateOfBirth"
                name="dateOfBirth"
                inputFormat="DD/MM/YYYY"
                label="Date of Birth"
                openTo="year"
                minDate={dayjs('1943-00-00')}
                views={['year', 'month', 'day']}
                value={response.dateOfBirth}
                onChange={(newResponse) => {
      setResponse({...response, dateOfBirth:dayjs(newResponse).format('YYYY-MM-DD')});
    }}
                renderInput={(params) => <TextField {...params} />}
              />
              </LocalizationProvider>
            </Grid>
            {/* first name input */}
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            {/* email input */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
            </Grid>
            {/* password  input*/}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </Grid>
            {/* confirm password input*/}
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="new-password"
                onChange={handleChange}
              />
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signin" variant="body2" style={{ textDecoration: 'none', color: 'inherit',}}>
                Already have an account?   <Button variant="outlined">Sign in</Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  )};

export default SignUpForm