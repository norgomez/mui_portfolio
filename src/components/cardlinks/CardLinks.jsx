import React from 'react'
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import github from './github-logo.jpg'


const FeatureCards = () => {
  return (
    <>
      <Container>
        <Grid container sx={{m: 3}}>


          <Grid item sx={{m: 1}}>
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea>
                <CardMedia component='img' height='140' src={github} alt='github-logo' />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  GitHub
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, modi ratione ex minima asperiores consectetur, quisquam ab error veniam delectus, qui repellendus natus sequi! Culpa eaque recusandae obcaecati facilis magni.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


          <Grid item sx={{m: 1}}>
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea>
                <CardMedia component='img' height='140' src={github} alt='github-logo' />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  Project 1
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, modi ratione ex minima asperiores consectetur, quisquam ab error veniam delectus, qui repellendus natus sequi! Culpa eaque recusandae obcaecati facilis magni.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


          <Grid item sx={{m: 1}}>
            <Card sx={{ maxWidth: 250 }}>
              <CardActionArea>
                <CardMedia component='img' height='140' src={github} alt='github-logo' />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  Project 2
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, modi ratione ex minima asperiores consectetur, quisquam ab error veniam delectus, qui repellendus natus sequi! Culpa eaque recusandae obcaecati facilis magni.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>


        </Grid>
      </Container>
    </>
  )
}

export default FeatureCards;