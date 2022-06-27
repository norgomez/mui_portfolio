import React from 'react';
import { Container, Typography,Grid, Button } from '@mui/material';




const Header = () => {
  return (
    <div>
      <Container maxWidth='sm' sx={{mt: 5}}>
        <Typography variant='h3' align='center' color='textPrimary' gutterBottom> 
            Hello World !
        </Typography>
      </Container>

      <Grid container>
        <Grid item xs={6} md={6} lg={6} xl={6}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur iste facere ipsam quis modi fugiat consectetur rerum minus, blanditiis dolorum adipisci nisi vero quas incidunt quia quos beatae sit sed!
          </Typography>
        </Grid>
      </Grid>

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