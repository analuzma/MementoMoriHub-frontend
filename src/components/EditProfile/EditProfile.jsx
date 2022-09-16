import { useState } from "react";
import { styled } from "@mui/material/styles";
import { editUserWs } from "../../services/user-ws";
import { deleteUserWs } from "../../services/user-ws";
import { uploadImageWs } from "../../services/upload-ws";
import {Typography, Avatar, Box, Grid, IconButton, Paper, Button, TextField} from "@mui/material";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { Navigate } from "react-router-dom";


const EditProfile = ( {user, setUser, authentication, sendMessage, editHandler} ) => {
  const [values, setValues] = useState({
    imageUrl: user.imageUrl,
    firstName: user.firstName,
  });

  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const Input = styled("input")({
    display: "none",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    setMessage(null);
    setError(null); 
  };

  const handleUpload = async (e) => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    uploadImageWs(formData)
    .then((res) => {
        if (res.status){
                  setValues({
          ...values,
          imageUrl: res.data.url.uri,
        });
        setMessage(res.data.msg);
        } else {
          setMessage(res.data.errorMessage)
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    try {
      editUserWs(values).then((response) => {
        if (response.status) {
          editHandler()
          sendMessage("Profile updated!", "success")
          authentication(response.data.user)
          setError(null);
          setTimeout(() => {
            // window.location.reload();
          }, 3000);
        } else {
          setError(response.errorMessage);
        }
      });
    } catch (error) {
      setError(error.errorMessage);
    }
  };
  //NOT WORKING YET
  //   const handleDeleteAccount = async (e) => {
  //   deleteUserWs(user)
  //   .then(() => {
  //   console.log(user)
  //   // setUser(null)
  //   // localStorage.removeItem("user")
  //   sendMessage("You deleted your account", "warning")
  //   Navigate("/")
  //   console.log("deleted user", user)
  //     })
  //     .catch((err) => {
  //       setError(err);
  //     });
  // };

  return (
    <>
        <Paper sx={{p:"1px", mt:"5px"}}>
      <Box
        sx={{
          display: "flex",
          alignItems:"center",
          justifyContent:"center", 
          flexDirection: "column",
          mt: 5,
        }}
      >
        <Paper sx={{ maxWidth: 600, p:"px" }}>
          <form onSubmit={handleFormSubmission} >
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ mb: 3, fontFamily:"warlock" }}
            >
              Edit Profile
            </Typography>
              {/* Avatar */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <Avatar
                    alt={user.firstName}
                    src={values.imageUrl}
                    className="avatar-div"
                    sx={{ alignSelf: "center" }}
                  />
                </div>
                <label htmlFor="icon-button-file">
                  <Input
                    accept="image/*"
                    id="icon-button-file"
                    name="imageUrl"
                    type="file"
                    onChange={handleUpload}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    sx={{ mb: 2 }}
                  >
                      
                    <AddAPhotoIcon />
                  </IconButton>
                </label>
              </Box>
            {/* email */}
            <TextField
              id="outlined-basic"
              label="email"
                disabled
              name="email"
              defaultValue={user.email}
              variant="outlined"
              sx={{ width: "300px", mb: 2 }}
            />
            {/* first name */}
            <TextField
              id="outlined-basic"
              label="First Name"
              name="firstName"
              defaultValue={user.firstName}
              variant="outlined"
              onChange={handleChange}
              sx={{ width: "300px", mb: 2 }}
            />
            <div>
            </div>
            <Button type="submit" variant="contained">
              EDIT PROFILE
            </Button>
            {/* NOT WORKING YET */}
            {/* <div> 
                <Grid  container justifyContent="flex-end" onClick={handleDeleteAccount}>
            <Button color="error">
              DELETE ACCOUNT
            </Button>
          </Grid>
          </div> */}
            {error ? (
              <>
              <Box sx={{ m: 2 }}>
                <Typography variant="body2" color="error">
                  {error}
                </Typography>
              </Box>
                </>       
            ) : (
              <Box sx={{ m: 2 }}>
                <Typography variant="body2" color="primary">
                  {message}
                </Typography>
              </Box>
            )}
          </form>
        </Paper>
      </Box>
      </Paper>
    </>
  );
};

export default EditProfile;