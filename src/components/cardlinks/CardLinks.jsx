import React from 'react'
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Divider } from '@mui/material';
import github from './github-logo.jpg'
import College from './College.jpg'


const FeatureCards = () => {
  return (
    <>

  <Divider > Cards </Divider>
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
                <CardMedia component='img' height='140' src={College} alt='College Library' />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  AIT
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
              <img height='140' src='https://biolibre.fr/images/articles/codewars.jpg' alt='github-logo' />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                  CodeWars
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
                  Project 3
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