import React from 'react';
import { Container, Divider, Typography, Grid } from '@mui/material';
import './footer.css';

const Footer = () => {
  return (
    <>
      <Divider>Copyright 2022</Divider>
      <Container maxWidth='sm' sx={{mt: 5}}>

        <Typography variant='h6' align='center' color='textPrimary' >
          Footer Information.
        </Typography>

        <Grid container sx={{mt: 1}}  spacing={2}>
          
          <Grid item sm={6} md={6}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolorum perferendis laboriosam dolores ullam, at aperiam omnis, quaerat corrupti culpa amet magnam debitis veniam? Doloremque debitis facere hic qui corporis.
          </Grid>

          <Divider orientation='vertical' flexItem />

          <Grid item sm={6} md={6}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id cumque, laudantium doloremque sequi ex, aperiam pariatur, ducimus tempora labore vel? Dignissimos corporis harum voluptates beatae molestias possimus quasi magni!
          </Grid>



        </Grid>
      </Container>
    </>
  )
}

export default Footer;