import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Pagination, Stack, Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  const [course, setCourse] = useState([])
  const [loading, setLoading] = useState(true)


  const [currentPage, setCurrentPage] = useState(1)


  const CardPerPage = 12;

  const indexOfLastCard = currentPage * CardPerPage;

  const indexOfFirstCard = indexOfLastCard - CardPerPage;

  const currentCard = course.slice(indexOfFirstCard, indexOfLastCard);



  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })

  }



  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        'https://test.plan-b-eg.com/api/Courses/GetAllCourses?lang=en&limit=12&page=1'
      );
      setCourse(data.data)
      setLoading(false)
    };
    getData();
  }, []);



  return (
    <Box>

      <Box sx={{ position: "absolute", top: "55%", left: "50%" }}> {loading && <CircularProgress />} </Box>
      <Grid container>
        {currentCard.map((items) => (
          <Grid item key={items.id} lg={4} md={4} sm={6} xs={12} >
            <Box>

              <Card sx={{ margin: "1.5rem" }}>
                <Link to={`/detilse/${items.id}`}>
                  <CardMedia
                    component="img"
                    height="194"
                    image={items.photo}
                    alt="Paella dish"
                  />
                </Link>
                <CardContent>
                  <Typography variant='h6' >
                    {items.name}
                  </Typography>
                  <Typography color="gray">
                    {items.price}<span style={{ fontSize: "15px" }}>&#36;</span>
                  </Typography>

                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Stack spacing={2} mt="100px" alignItems="center">
        {course.length > 9 && (<Pagination count={Math.ceil(course.length / CardPerPage)} variant="outlined" defaultPage={1}
          page={currentPage}
          onChange={paginate}
        />)}

      </Stack>
      <Outlet />
    </Box>
  )
}

export default Home
// name, id, photo, price,fullDesc