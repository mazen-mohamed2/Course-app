import { CircularProgress, Grid,Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const Detilse = () => {
 
  const {id} = useParams() 
  const itemid = Number(id)
  const [item,setItem] = useState([])
  const [loading,setLoading] = useState(true)

    
    
  


  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(
        'https://test.plan-b-eg.com/api/Courses/GetAllCourses?lang=en&limit=12&page=1'
      );
      
      setItem(data.data.find((e) => e.id === itemid))
      setLoading(false)
    };
    getData();
  }, []);
    
  return (
    <Box m="2rem">
      <Grid container>
       <Box sx={{position:"absolute", top:"55%", left:"50%" }}>
            {loading && <CircularProgress/>}
          </Box>
        <Grid item lg={6} md={6} sm={6} xs={12}>
         
          <Box>
              <img src={item.photo}/>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={12}>


          <Box>
            <Typography variant='h4'> {item.name} </Typography>
            <Typography variant='h6' color="gray" my="1rem"> {item.price}</Typography>
            <Typography variant='h6'> {item.fullDesc} </Typography>
          </Box>


          
        </Grid>

      </Grid>
    </Box>
  )
}



export default Detilse