import { AppBar, Container, Toolbar, Box, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';


const Navbar = () => {
  return (
    <>
      <Box sx={{flexgrow: 1}}>
        <AppBar position='static'>
          <Container>
            <Toolbar>
              <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                Breaking News
              </Typography>
              <Button color='inherit'>
                Login
              </Button>
              <Button color='inherit'>
                Logout
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>

    </>
    
  )
};

export default Navbar;