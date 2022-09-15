import * as React from 'react';
import { useNavigate } from "react-router-dom";
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Avatar, Button, Tooltip} from '@mui/material/'
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import skull from "../../img/skull.png"

const pages = [
    {
      name: 'Calendar',
      path: '/calendar'
    },
    {
      name: 'Journal',
      path: '/journal'
    },
      {
      name: 'quotes',
      path: '/quotes'
    },
      {
      name: 'wisdom',
      path: '/wisdom'
    }];

const Navbar = ({user, setUser, sendMessage}) => {
  const navigate = useNavigate()

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


    const handleLogout = () => {
    setUser(null)
    localStorage.removeItem("user")
    sendMessage("You have logged out. See you next time...hopefully", "error")
    navigate("/");
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar variant="dense" disableGutters>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'warnock',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
            >
            <img src={skull} style={{width:"25px", height:"25px", marginRight:"10px", marginTop:"3px"}}></img>
             Memento Mori Hub
          </Typography></Link>
        
            { user ?
              <>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(({name, path, index}) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link to={path}  style={{ textDecoration: 'none' }}>{name}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box></>
          : <></> }
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}><Typography
            variant="h5"
            noWrap
              sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'warnock-pro',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           <img src={skull} style={{width:"25px", height:"25px", marginRight:"10px", marginTop:"3px"}}></img>
             Memento Mori Hub
          </Typography></Link>
            {/* if there is an active user */}
            {user?
          <>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(({name, path, index}) => (
              <Link key={index} to={path} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {name}
              </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.firstName} src={user.imageUrl} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '35px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* user settings */}
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to={'/profile'}  style={{ textDecoration: 'none', color: 'inherit' }}>
                      <AccountCircleIcon></AccountCircleIcon>Profile
                      </Link>
                      </Typography>
                </MenuItem>
                              <MenuItem  onClick={handleCloseUserMenu}>
                  <div onClick={handleLogout}>
                    <Typography textAlign="center" >
              <LogoutRoundedIcon  fontSize="small" 
             >
               </LogoutRoundedIcon>Log Out
                      </Typography>
                      </div>
  
                </MenuItem>
            </Menu>
          </Box>
</>
          :
        <Link to="/signup"  style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button variant="contained" endIcon={<LoginIcon />} disableRipple>     
          Access
        </Button>
          </Link>

          }
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar