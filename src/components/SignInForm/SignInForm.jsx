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
import { loginWs } from "../../services/auth-ws";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link style={{ textDecoration: 'none', color:'inherit'}} to="/">
        Memento Mori Hub
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


export default function SignInForm(props) {
    const navigate = useNavigate()

     const [response, setResponse] = useState({
    email: "",
    password: "",
  });

  const { email, password } = response

    const handleChange = (e) => {
    setResponse({
      ...response,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      email,
      password,
    };

    loginWs(credentials)
    .then(res=>{
      const{ data,status,errorMessage} = res
      if (status){
        props.authentication(data.user)
        props.sendMessage("Welcome back!", "severity")
        navigate('/profile')
        return;
      } else {
          props.sendMessage(errorMessage, "warning")
        }
    }
    )
  }

  return (
    <Container component="main" maxWidth="xs" >
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
          Sign In
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
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
                autoComplete="password"
                onChange={handleChange}
              />
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/signup" variant="body2" style={{ textDecoration: 'none', color: 'inherit'}}>
                Don't have an account?    <Button variant="outlined">Sign Up</Button>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
);
}