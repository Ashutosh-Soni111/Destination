import React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Container, Avatar, Tooltip, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CatchingPockemonIcon from '@mui/icons-material/CatchingPokemon'
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Styling/Navbar.css';


const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: '#fff',
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'underline' : 'none',
    }
  }
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <AppBar sx={{height: 70, justifyContent: 'center', backgroundColor: '#000'}}>
            <Container maxWidth='xl'>
              <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                  <CatchingPockemonIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                  DESTINATION
                </Typography>
                <Tooltip sx={{ mx: 2, background: 'none' }} title='Search' onClick={() => alert('hello')}>
                  <Avatar >
                    <SearchIcon variant='outlined' />
                  </Avatar>
                </Tooltip>
                <Stack direction='row' spacing={2} sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                  <NavLink style={navLinkStyles} to='/'>Home</NavLink>
                  <NavLink style={navLinkStyles} to='/about'>About</NavLink>
                  <NavLink style={navLinkStyles} to='/explore'>Explore</NavLink>
                  <NavLink style={navLinkStyles} to='/login'>Log-in</NavLink>
                </Stack>
                <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                  <Box
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                  >
                    <MenuIcon sx={{ my: 2, color: 'white', display: 'block', fontSize: '2.5rem' }} />

                  </Box>
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
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                      width: '500px'
                    }}
                  >
                    <Stack>
                      <MenuItem><NavLink to='/'>Home</NavLink></MenuItem>
                      <MenuItem><NavLink to='/about'>About</NavLink></MenuItem>
                      <MenuItem><NavLink to='/explore'>Explore</NavLink></MenuItem>
                      <MenuItem><NavLink to='/login'>Log-in</NavLink></MenuItem>
                    </Stack>
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar >
        </div>
      </nav>
    </>
  );
};
export default ResponsiveAppBar;
