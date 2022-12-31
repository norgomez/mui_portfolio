import React from 'react';
import { Container, Typography,Grid, Button } from '@mui/material';




const Header = () => {
  return (
    <div>
      <Container maxWidth='sm' sx={{mt: 5}}>
        <Typography variant='h3' align='center' color='textPrimary' gutterBottom> 
            Engineering Wiki
        </Typography>
      </Container>

      <Grid container>
        <Grid item xs={6} md={6} lg={6} xl={6}>
          <Typography align='center'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate soluta impedit veniam asperiores laudantium maiores voluptatibus! Repellat tempore accusamus nesciunt tenetur, ratione voluptatum assumenda libero aliquid quod repellendus nulla temporibus.
          </Typography>
        </Grid>
      </Grid>

      <Button
        onClick={() => {
          alert('clicked');
        }}
      >
        Click me
      </Button>


      <Grid>
        <Grid item>
          <Button variant='contained'>
            About
          </Button>
          <Button variant='outline'>
            Contact
          </Button>
        </Grid>
      </Grid>
    </div>
  
  )
}

export default Header;