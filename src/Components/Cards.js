import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions, Container, Grid, Box } from '@mui/material';
import './Styling/Cards.css'
import { Mock_data } from '../Database/Mock_data.js'

export default function MultiActionAreaCard() {
  return (
    <div className='cards'>
      <Container>
        <h1>Check out these EPIC Destinations!</h1>
        <Grid container my={0} rowSpacing={2} columnSpacing={1}>                                               {/*my is margin in vertical direction */}
          {
            Mock_data.map((row) => (
              <Grid key={row.id} item xl={3} lg={3} md={4} sm={6} xs={12} >
                <Box>
                  <Card sx={{ maxWidth: 345, height: 400, backgroundColor: '#eee'}} id={row.id}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="140"
                        image={row.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {row.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {row.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Go to
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </div>
  );
}
